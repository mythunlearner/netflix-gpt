import {useSelector} from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  // Handle loading state
  if (!movies || movies.length === 0) {
    return <div>Loading...</div>; // Show a loading indicator
  }
  const mainMovie = movies[0];
  console.log("one"+ mainMovie);

  const {original_title, overview, id} = mainMovie;
  return (
  <div className="pt-[30%] bg-black md:pt-0">
    <VideoTitle title={original_title} overview={overview}/>
    <VideoBackground movieId={id}/>
  </div>
  );
};
export default MainContainer;