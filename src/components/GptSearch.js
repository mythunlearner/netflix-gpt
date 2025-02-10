import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BG_URL } from '../utils/constants'
// import DeepSeekSearchBar from './DeepSeekSearchBar';
const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img
          src={BG_URL}
          alt="logo"
        />
      </div>
      <GptSearchBar />
      {/* <DeepSeekSearchBar/> */}
      <GptMovieSuggestion />
    </div>
  );
}

export default GptSearch