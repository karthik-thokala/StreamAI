import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GPTMovies = () => {
  
  const {movieNames, movieResults}= useSelector((store)=>store.gpt);
  if(!movieNames)return null;

  return (
    <div className='p-4 m-4 bg-black text-white bg-opacity-9 0'>
      
     {movieNames.map((movieName,index)=><MovieList key={movieName} title={movieName} movies={movieResults[index]} />)};


    </div>
  )
}

export default GPTMovies
