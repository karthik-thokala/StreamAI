import { createSlice } from "@reduxjs/toolkit";

const temp = createSlice({
    name: "movies",
    initialState: {
      nowPlayingMovies: null,
      popularMovies: null,
      trailerVideo: null,
      toprated :null,
      upcomingmovies:null
      
    },
    reducers: {
      addNowPlayingMovies: (state, action) => {
        state.nowPlayingMovies = action.payload;
      },
      addPopularMovies: (state, action) => {
        state.popularMovies = action.payload;
      },
      addTopratedMovies: (state, action) => {
        state.toprated = action.payload;
      },
      addUpcomingMovies: (state, action) => {
        state.upcomingmovies = action.payload;
      },
      
      addTrailerVideo: (state, action) => {
        state.trailerVideo = action.payload;
      },
    },
  });
 export const {addNowPlayingMovies,addTrailerVideo,addUpcomingMovies,addTopratedMovies,addPopularMovies} = temp.actions;
export default temp.reducer;