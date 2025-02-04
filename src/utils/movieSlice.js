import {createSlice} from "@reduxjs/toolkit"
const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: [],
    trailerVideos: [],
    popularMovies: [],
    topRatedMovies: [],
    upComingMovies: []
  },
  reducers: {
       addNowPlayingMovies: (state, action) => {
        state.nowPlayingMovies = action.payload;
       },
       addTrailerVideos: (state, action) => {
        state.trailerVideos = action.payload;
       },
       addPopularMovies: (state, action) => {
        state.popularMovies = action.payload;
       },
       addTopRatedMovies: (state, action) => {
        state.topRatedMovies = action.payload;
       },
       addUpComingMovies: (state, action) => {
        state.upComingMovies = action.payload;
       }
  }
});

export const {addNowPlayingMovies, addTrailerVideos, addPopularMovies, addTopRatedMovies,addUpComingMovies} = movieSlice.actions;
export default movieSlice.reducer;