import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../Utilis/constant";
import { useEffect } from "react";
import { addUpcomingMovies } from "../Utilis/temp";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const newupcomingMovies = useSelector((store) => store.movies.upcomingmovies);

  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming", 
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    if (!newupcomingMovies) getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;