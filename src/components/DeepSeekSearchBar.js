import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { API_OPTIONS, DEEPSEEK_API_KEY } from "../utils/constants";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  // Search movie in TMDB
  const fetchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleDeepSeekSearchClick = async () => {
    console.log(searchText.current.value);

    // Step 1: Make a request to DeepSeek API to get movie recommendations
    const deepSeekQuery =
      "Act as a Movie recommendation system and suggest some movies for the query: " +
      searchText.current.value +
      ". only give me names of 5 movies, in a comma separated format like this example result ahead. Example: Pursuit of Happiness, Toy Story, Cast Away";
    
    try {
      const deepSeekResponse = await fetch("https://api.deepseek.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${DEEPSEEK_API_KEY}`, // Add your DeepSeek API key here
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "deepseek-chat", // The model you're using for movie recommendations
          messages: [{ role: "user", content: deepSeekQuery }],
        }),
      });

      if (!deepSeekResponse.ok) {
        throw new Error("DeepSeek API request failed");
      }

      const deepSeekData = await deepSeekResponse.json();

      // Step 2: Extract movie list from DeepSeek response
      if (deepSeekData.choices && deepSeekData.choices.length > 0) {
        const deepSeekMovies = deepSeekData.choices[0]?.message?.content?.split(",");
        
        // Step 3: Fetch details of the movies from TMDB API
        for (let movie of deepSeekMovies) {
          const movieResults = await fetchMovieTMDB(movie.trim());
          console.log("Movie found:", movieResults);
        }
      } else {
        console.log("No movie recommendations found from DeepSeek.");
      }
    } catch (error) {
      console.error("Error fetching data from DeepSeek:", error);
    }
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="bg-black w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder="Search for movies"
        />
        <button
          className="col-span-3 py-2 px-4 m-4 bg-red-800 text-white rounded-lg"
          onClick={handleDeepSeekSearchClick}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
