import React ,{useState,useEffect} from 'react';
import axios from "./axios";
import "./Row.css";
import Youtube from "react-youtube";

const base_url = "https://image.tmdb.org/t/p/original";
function Row({title , fetchUrl , isLargeRow}) {
    

    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

// Options for react-youtube
const opts = {
  height: "390",
  width: "100%",
  playerVars: {
    autoplay: 1,
  },
};

  //A snippet of code which runs based on a specifc condition

  useEffect(() => {
      //if [], run once when the row loads , and don't run again.

     async function fetchData() {
          const request = await axios.get(fetchUrl);
          setMovies(request.data.results);
          return request;
      }
      fetchData();
  }, [fetchUrl])   //fetchUrl is variable which is pulled from outside the block.
  //So something change I have to refile the code.
  //console.log(movies);

  const handleClick = async (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      let trailerurl = await axios.get(
        `/movie/${movie.id}/videos?api_key=eba3c3d70158caba4c8d39e8209a9738`
      );
      setTrailerUrl(trailerurl.data.results[0]?.key);
    }
  };

    return (
        <div className="row">
              <h2>{title}</h2>
         <div className="row_posters">
              {
                  movies.map(movie =>(
                      <img 
                      key={movie.id}
                      onClick={() => handleClick(movie)}
                      className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                      src={`${base_url}${isLargeRow ? movie.poster_path: movie.backdrop_path}`} alt={movie.name}/>
                  ))
              }
              </div>
            {/* container -> posters */}
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row
