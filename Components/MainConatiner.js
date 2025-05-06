import { useSelector } from 'react-redux'
import { useParams } from 'react-router';
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'


const MainConatiner = ({ selectedId }) => {
  const movies = useSelector((store) => store.movies);
  if (!movies) return null;

  // Combine all movie arrays into one list to search by ID
  const allMovies = [
    ...(movies.nowPlayingMovies || []),
    ...(movies.popularMovies || []),
    ...(movies.toprated || []),
    ...(movies.upcomingmovies || []),
    ...(movies.gptMovieResult?.flat() || [])  // If you're storing GPT results in redux
  ];

  const selectedMovie =
    allMovies.find((movie) => movie.id === Number(selectedId)) || allMovies[0];

  if (!selectedMovie) return null;

  const { original_title, overview } = selectedMovie;

  return (
    <div className="pt-[30%] bg-black md:pt-0">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={selectedMovie.id} />
    </div>
  );
}

export default MainConatiner
