
import { createSlice } from "@reduxjs/toolkit"

const gptslice = createSlice({
    name :'gpt',
    initialState:{
        showGptSearch:false,
        movieNames:null,
        movieResults:null,
    },
    reducers:{
        toggleGptSearchview :(state)=>{
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieResult:(state,action)=>{
            const {movieNames,movieResults}= action.payload
            state.movieNames = movieNames,
            state.movieResults = movieResults;
        }
    },
});


export default gptslice.reducer;
export const {toggleGptSearchview,addGptMovieResult}= gptslice.actions;