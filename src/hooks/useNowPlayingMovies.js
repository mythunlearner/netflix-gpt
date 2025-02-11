import { API_OPTIONS } from "../utils/constants";
import {useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addNowPlayingMovies } from "../utils/movieSlice";
const useNowPlayingMovies = () => {
      // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const nowPlayingMovies = useSelector(
    (store) => store.movies?.nowPlayingMovies
  );
  const getNowPlayingMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        API_OPTIONS
      );
      const json = await data.json();
      console.log(json.results);
      dispatch(addNowPlayingMovies(json.results));
    } catch (error) {
      console.error("Failed to fetch now playing movies:", error);
    }
  };

  useEffect(() => {
    if (!nowPlayingMovies || nowPlayingMovies.length === 0) {
      getNowPlayingMovies();
    }
  }, [nowPlayingMovies, dispatch]); // Add nowPlayingMovies to dependencies
};

export default useNowPlayingMovies;