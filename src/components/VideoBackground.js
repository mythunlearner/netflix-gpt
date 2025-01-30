import {useEffect} from 'react'
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideos } from '../utils/movieSlice';
const VideoBackground = ({movieId}) => {
   const dispatch = useDispatch();
   const trailerVideo = useSelector(store => store.movies?.trailerVideos);
   //const [trailerId,setTrailerId] = useState(null);
  //fetch movie trailer
   const getMovieTrailer = async () => {
     const data = await fetch('https://api.themoviedb.org/3/movie/939243/videos?language=en-US',API_OPTIONS);
     const json = await data.json();
    
     const filterData = json.results.filter(video => video.type ==="Trailer");
     const trailer = filterData.length ? filterData[0] : json.results[0];
     console.log(trailer);
     //setTrailerId(trailer.key);
     dispatch(addTrailerVideos(trailer));
    };

    useEffect(() => {
      getMovieTrailer();
    },[]);

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/"+trailerVideo?.key}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoBackground