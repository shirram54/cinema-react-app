import { useContext } from "react";
import MoviesContext from "../../MoviesContext";
import "./Movies.css";
import * as React from 'react';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Movie from "../Movie/Movie";


function Movies() {
  const { popularMovies, topRatedMovies, upComingMovies } = useContext(MoviesContext);


  const theme = createTheme({
    palette: {
      primary: {
        main: "#422d61",
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="movie-app">
          <div className="welcome">
            Welcome to GoCinema, You can watch movies online here. Everything is free and without ads.
          </div>
          <div className="all-movies">
            <div>
              <div className="title-1">Popular Movies</div>
              <section className="movies">
                {popularMovies.map((movie) => (
                  <Movie movie={movie} />
                ))}
              </section>
            </div>

            <div>
              <div className="title-1">Top Rated Movies</div>
              <section className="movies">
                {topRatedMovies.map((movie) => (
                  <Movie movie={movie} />
                ))}
              </section>
            </div>

            <div>
              <div className="title-1">Upcoming Movies</div>
              <section className="movies">
                {upComingMovies.map((movie) => (
                  <Movie movie={movie} />
                ))}
              </section>
            </div>

          </div>
        </div>
      </ThemeProvider>
    </>
  );
}
export default Movies;






