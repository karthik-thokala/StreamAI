import React from 'react'
import Header from './Header'
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import MainConatiner from './MainConatiner.js';
import SecondaryContainer from './SecondaryContainer.js';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies.js';
import useTopRatedMovies from '../hooks/useTopRatedMovies.js';
import useUpcomingMovies from '../hooks/useUpcomingMovies.js';
import usePopular from '../hooks/usePopular.js';
import GPTSearch from './GPTSearch.js';

const Browser = () => {
  const { id } = useParams();  
  
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopular();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GPTSearch />
      ) : (
        <>
          <MainConatiner  selectedId={id}/>
          <SecondaryContainer />
        </>
      )}
    </div>
  );
}

export default Browser
