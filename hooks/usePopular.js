
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../Utilis/constant";
import { useEffect } from "react";
import { addPopularMovies } from "../Utilis/temp";

const usePopular =() =>{
    const dispatch= useDispatch();
    const popular = useSelector((store)=>store.movies.popularMovies);
    const getPopularMovies = async() =>{
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/popular",
            API_OPTIONS
        );
        const json = await data.json();
        dispatch(addPopularMovies(json.results));


    };

    useEffect(()=>{
       if(!popular) getPopularMovies();
    },[]);
};


export default usePopular