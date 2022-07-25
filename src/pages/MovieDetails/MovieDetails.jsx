import "./MovieDetails.css";
import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails, originalImageUrl } from "../../services/moviesAPI";

function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getMovieDetails(id)
      .then((response) => response.json())
      .then((responseJson) => {
        setMovie(responseJson)
      }
      )
  }, [id]);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#422d61",
      },
    },
  });

  console.log('movie', movie)

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="movie-page">

          {movie && (
            <div className="movie_card" id="bright">
              <div className="info_section">
                <div className="movie_header">
                  <h1 className="movie-title-id">{movie.title}</h1>
                  <p >{movie.release_date}</p>
                </div>
                <div className="movie_desc">
                  {movie.overview}
                </div>
              </div>
              <div>
                <img className="img-movie-id" src={`${originalImageUrl}/${movie.poster_path}`} />
              </div>
            </div>
          )}
        </div>
      </ThemeProvider>
    </>
  )
}




export default MovieDetails;




