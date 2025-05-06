import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../Utilis/constant";
import { useEffect } from "react";
import { addTopratedMovies } from "../Utilis/temp";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topratedMovies = useSelector((store) => store.movies.toprated);

  const getTopratedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated", 
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTopratedMovies(json.results));
  };

  useEffect(() => {
    if (!topratedMovies) getTopratedMovies();
  }, []);
};

export default useTopRatedMovies;