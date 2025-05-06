import React from 'react';
import { useNavigate } from 'react-router';
import { IMG_CDN_URL } from '../Utilis/constant'
const MovieCard = ({ posterPath,id}) => {
  const navigate = useNavigate();
  if (!posterPath) return null;

  const handleClick = () => {
    navigate(`/browser/${id}`); 
  };
  
 
  return (
    <div onClick={handleClick}
    className="w-48 mx-2 cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:z-10 rounded overflow-hidden"
  >
    <img
      alt="Movie Card"
      src={IMG_CDN_URL + posterPath}
      className="w-full h-auto object-cover rounded"
    />
    </div>
  )
}

export default MovieCard
