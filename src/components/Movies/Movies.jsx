
import { useContext, useEffect, useState } from "react";
import MoviesContext from "../../MoviesContext";
import "./Movies.css";
const baseImageUrl = "https://image.tmdb.org/t/p/w500";
import * as React from 'react';
import { useParams } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { Badge, Button } from "@mui/material";
import CustomPagination from "../Pagination/CustomPagination";
import Search from "../../pages/Search/Search";
import PageContext from "../../PageContext";



function Movies() {
  const { page, setPage } = useContext(PageContext);
  const { movies } = useContext(MoviesContext);
  const { id } = useParams();
  const [moviesDisplay, setMoviesDisplay] = useState([]);
  const [contentFilter, setContentFilter] = useState("topRated");

  const theme = createTheme({
    palette: {
      primary: {
        main: "#422d61",
      },
    },
  });


  useEffect(() => {
    setMoviesDisplay(movies);
  }, [movies]);


  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="movie-app">
          <div className="welcome">
            Welcome to GoCinema, You can watch movies online here. Everything is free and without ads.
          </div>
          <Search />

          <section className="movies">
            {moviesDisplay.map((movie, index) => (
              <div class="flip-box">
                <div className="container">
                  <div className="one">
                    <img src={`${baseImageUrl}${movie.poster_path}`} ></img>
                    <Badge
                      badgeContent={movie.vote_average}
                      color={movie.vote_average > 7 ? "primary" : "secondary"}
                      sx={{ position: 'absolute' }}
                    />
                  </div>
                  <div className="two">
                    <h2 className="movie-title">{movie.title}</h2>
                    <p class="movie-release"> Release: {movie.release_date}</p>
                    <p class="flip_content">{movie.overview}</p>
                    <div>
                      <Link to={`/movies/${id}`}>
                        <Button
                          variant="contained"
                          sx={{
                            bgcolor: "#422d61",
                            fontSize: "0.70rem",
                            borderRadius: 10,
                          }}
                        >
                          Watch
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </section>
          <CustomPagination />
        </div>
      </ThemeProvider>
    </>
  );
}
export default Movies;






