import MovieList from "./MovieList";
import {  useSelector } from 'react-redux';

const SecondaryContainer = () => {
    const movies = useSelector(store => store.movies);
 return( 
  movies?.nowPlayingMovies && (
  <div className="bg-black">
    <div className="mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
    <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies}/>
    <MovieList title={"Up Coming Movies"} movies={movies?.upComingMovies}/>
    <MovieList title={"Popular"} movies={movies?.popularMovies}/>
    <MovieList title={"Top Rated"} movies={movies?.topRatedMovies}/>
    </div>
 </div>
    )
 );
};

export default SecondaryContainer;