import {useEffect} from 'react'
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from 'react-redux';
import { addTrailerVideos } from '../utils/movieSlice';
const useMovieTrailer = (movieId) => {

    const dispatch = useDispatch();
 //fetch movie trailer
 const getMovieTrailer = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",API_OPTIONS);
    const json = await data.json();
   
    const filterData = json.results.filter(video => video.type ==="Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideos(trailer));
   };

   useEffect(() => {
     getMovieTrailer();
   },[]);
}

export default useMovieTrailer;