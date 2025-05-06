// import React, { useRef } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import lang from '../Utilis/languageConstant';
// import { API_OPTIONS } from '../Utilis/constant'; 
// import { addGptMovieResult } from '../Utilis/gptslice';
// import fetchGpt3Response from '../Utilis/huggingface'; 

// const GPTSearchbar = () => {
//   const dispatch = useDispatch();
//   const langKey = useSelector(store => store.config.lang);
//   const searchText = useRef(null);

 
//   const searchMovieTMBD = async (movie) => {
//     try {
//         const encodedMovie = encodeURIComponent(movie.trim());
//         const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${encodedMovie}&include_adult=false&language=en-US&page=1`, API_OPTIONS);
//         if (!data.ok) {
//             console.error(`TMDB API error for "${movie}": ${data.status} ${data.statusText}`);
//             return [];
//         }
//         const json = await data.json();
//         return json.results || [];
//     } catch (error) {
//         console.error(`Failed to fetch TMDB data for "${movie}":`, error);
//         return [];
//     }
//   };


//   const handleGptSearchClick = async () => {
//     const query = searchText.current.value;
//     if (!query) return;

//     const gptPrompt =
//       `Act as a Movie Recommendation system and suggest some movies for the query: ${query}. ` +
//       `Only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya`;

   
//     const gptMovies = await fetchGpt3Response(gptPrompt);

    
//     if (!gptMovies || gptMovies.length === 0) {
//         console.error("Failed to get valid movie recommendations from Hugging Face.");
        
//         return;
//     }
    

//     console.log("Received Movie Names Array:", gptMovies);

    
//     console.log(`Fetching TMDB details for: ${gptMovies.join(', ')}`);
//     const moviePromises = gptMovies.map(searchMovieTMBD);
//     const tmdbResultsSettled = await Promise.allSettled(moviePromises);

    
//     const successfulTmdbResults = [];
//     tmdbResultsSettled.forEach((result, index) => {
//         if (result.status === 'fulfilled' && result.value) {
//             successfulTmdbResults.push(result.value);
//         } else {
//             console.warn(`Failed to get TMDB details for "${gptMovies[index]}":`, result.reason || 'Empty result');
//             successfulTmdbResults.push([]); 
//         }
//     });

//     console.log("TMDB Results (nested arrays):", successfulTmdbResults);

    
//     dispatch(
//       addGptMovieResult({ movieNames: gptMovies, movieResults: successfulTmdbResults })
//     );
//   };

  
//   return (
//     <div className='pt-[35%] md:pt-[10%] flex justify-center'>
//       <form className='w-full md:w-1/2 bg-black grid grid-cols-12 gap-2 ' onSubmit={(e) => e.preventDefault()}>
//         <input
//           ref={searchText}
//           type='text'
//           className='p-4 m-4 col-span-8 md:col-span-9 text-black dark:text-white bg-gray-200 dark:bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-red-500'
//           placeholder={lang[langKey].gptSearchPlaceholder}
//         />
//         <button
//           className='col-span-3 md:col-span-2 m-4 py-2 px-4 bg-red-700 text-white rounded-lg hover:bg-red-800 transition-colors flex items-center justify-center'
//           onClick={handleGptSearchClick}
//         >
//           {lang[langKey].search}
//         </button>
//       </form>
//     </div>

    
       
//   );
// };

// export default GPTSearchbar;




import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import lang from '../Utilis/languageConstant';
import { API_OPTIONS } from '../Utilis/constant';
import { addGptMovieResult } from '../Utilis/gptslice';
import fetchGpt3Response from '../Utilis/huggingface';

const GPTSearchbar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector(store => store.config.lang);
  const searchText = useRef(null);

  const searchMovieTMBD = async (movie) => {
    try {
      const encodedMovie = encodeURIComponent(movie.trim());
      const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${encodedMovie}&include_adult=false&language=en-US&page=1`, API_OPTIONS);
      if (!data.ok) return [];
      const json = await data.json();
      return json.results || [];
    } catch (error) {
      console.error("TMDB error:", error);
      return [];
    }
  };

  const handleGptSearchClick = async () => {
    const query = searchText.current.value;
    if (!query) return;

    const gptPrompt =
      `Act as a Movie Recommendation system and suggest some movies for the query: ${query}. ` +
      `Only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya`;

    const gptMovies = await fetchGpt3Response(gptPrompt);
    if (!gptMovies || gptMovies.length === 0) return;

    const moviePromises = gptMovies.map(searchMovieTMBD);
    const tmdbResultsSettled = await Promise.allSettled(moviePromises);

    const successfulTmdbResults = tmdbResultsSettled.map((res, i) =>
      res.status === 'fulfilled' ? res.value : []
    );

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: successfulTmdbResults })
    );
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">🎬 Movie Genie AI</h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto">
          Ask me to recommend action movies, romantic classics, thrillers, or anything you like. I'll fetch the best titles for you! 🍿
        </p>
      </div>

      <form
        className="w-full max-w-2xl bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6 md:p-8 flex flex-col md:flex-row items-center gap-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="flex-1 px-4 py-3 rounded-lg bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-red-500 w-full"
        />
        <button
          type="button"
          onClick={handleGptSearchClick}
          className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors w-full md:w-auto"
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchbar;



