import React from 'react'
import GPTMovies from './GPTMovies';
import GPTSearchbar from './GPTSearchbar'

const GPTSearch = () => {
  return (
    <>
      <div>
        <div className="fixed -z-10 ">
          <img className='w-screen h-screen object-cover bg-black' alt="Netflix Background" />

        </div>
        <div className=''>
          <GPTSearchbar />
          <GPTMovies />
        </div>
      </div>
    </>
  )
}

export default GPTSearch
