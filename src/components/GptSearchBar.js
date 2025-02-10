
import React, { useRef } from "react";
import lang from "../utils/languageConstant";
import { useSelector ,useDispatch } from "react-redux";
import openai from "../utils/openai";
import {API_OPTIONS} from "../utils/constants"
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();
  // search movie in TMDB
  const fetchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json =await data.json();
    return json.results;
  };
  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    // Make an API call to GPT API and get Movie results
    const gptQuery =
      "Act as a Movie recommendation system adb suggest some movies for the query: " +
      searchText.current.value +
      ". only give me names of 5 movies, in a comma seperate like this example result given ahead. Example: Persuite of Happiness, Toy Story, cast away";
    const gptResult = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if(!gptResult.choices){
      //TODO: Write Error Handling
    }

    const gptMovies = gptResult.choices?.[0]?.mesasge?.content.split(",");

    // For each movie I will search TMDB API
    const promiseArray = gptMovies.map(movie => fetchMovieTMDB(movie));
    // this wil return arrya od promise [Promise, Promise, Promise]

     const tmdbResults = Promise.all(promiseArray);
     dispatch(addGptMovieResult({movieNames:useDispatch, movieResults:tmdbResults}));
  };


  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className=" bg-black w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}


          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceHolder}
        />
        <button
          className="col-span-3 py-2 px-4 m-4 bg-red-800 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );

};

export default GptSearchBar;


