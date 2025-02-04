import { API_OPTIONS } from "../utils/constants";
import {useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addPopularMovies } from "../utils/movieSlice";
const usePopularMovies = () => {
      // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  //const nowPlayingMovies =  useSelector((store) => store.movies?.nowPlayingMovies);
  const getPopularMovies = async () => {
    try{

    const data = await fetch(
        "https://api.themoviedb.org/3/movie/popular?page=1",
        API_OPTIONS
      );
      const json = await data.json();
      console.log(json.results);
      dispatch(addPopularMovies(json.results));
    } catch (error) {
      console.error('Failed to fetch popular movies:', error);
    }
 
  };

  useEffect(() => {
   // if (!nowPlayingMovies || nowPlayingMovies.length === 0) {
        getPopularMovies();
  //  }
  }, []); 
};
export default usePopularMovies;