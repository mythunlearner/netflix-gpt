
import { API_OPTIONS } from "../utils/constants";
import {useEffect} from "react";
import { useDispatch } from 'react-redux';
import { addUpComingMovies } from "../utils/movieSlice";
const useUpComingMovies = () => {
      // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();
  const getUpComingMovies = async () => {
    try{

    const data = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?page=1",
        API_OPTIONS
      );
      const json = await data.json();
      console.log(json.results);
      dispatch(addUpComingMovies(json.results));
    } catch (error) {
      console.error('Failed to fetch now playing movies:', error);
    }
 
  };

  useEffect(() => {
        getUpComingMovies();   
  }, []); 
};

export default useUpComingMovies;