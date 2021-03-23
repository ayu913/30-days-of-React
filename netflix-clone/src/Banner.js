
import React, { useState, useEffect } from "react";
import axios from "axios";
import requests from "./requests";
import "./Banner.css";
function Banner() {
  const [movie, setMovie] = useState();
  useEffect(() => {

    try {
      async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
      
    } catch (error) {
      console.log(error.request);
    }
    
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/xGexTKCJDkl12dTW4YCBDXWb1AD.jpg")`,
        backdropPosition: "center center",
      }}
    >
      {/* Background image */}
      <div className="banner_contents">
        {/* title */}
        <h1 className="banner_title">
          {/* {movie?.title || movie?.name || movie?.original_name} */}
          Money Heist
        </h1>

        {/* 2 buttons */}
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List </button>
        </div>

        {/* description */}
        <h1 className="banner_description">
        {/* {truncate(movie?.overview, 200)} */}
        To carry out the biggest heist in history, a mysterious man called The Professor recruits a band of eight robbers who have a single char
        </h1>
      </div>
      <div className="banner_fadeBottom" />
    </header>
  );
}

export default Banner;
