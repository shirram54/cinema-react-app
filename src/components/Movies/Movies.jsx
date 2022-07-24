
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
// import PageContext from "../../PageContext";



function Movies() {
  // const {page, setPage} = useContext(PageContext);
  const {movies} = useContext(MoviesContext);
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
    setMoviesDisplay(movies.slice(0, 8));
  }, [movies]);


  return (
    <>
    <ThemeProvider theme={theme}>
    <div className="movie-app">
      <div className="welcome">
       Welcome to GoCinema, You can watch movies online here. Everything is free and without ads. 
    </div>
    <Search/>
    <div className="topRated-all">
    <div
    className={`${contentFilter === "topRated" ? "active" : ""}`}
    onClick={() => {
    setContentFilter("topRated");
    setMoviesDisplay(movies.slice(0, 8));
  }}
  >
  {" "}
  <span className="topRated">Top Rated Movies</span>
  </div>
  <div
  className={`${contentFilter === "all" ? "active" : ""}`}
  onClick={() => {
    setContentFilter("all");
    setMoviesDisplay(movies);
  }}
  >
  All Movies
  </div>
  </div>

     <section className="movies">
      {moviesDisplay.map((movie,index)=> (
        <div class="flip-box"> 
              <div className="container">
  <div className="one">
  <Badge
        badgeContent={movie.vote_average}
        color={movie.vote_average > 7 ? "primary" : "secondary"}
      />
  
    <img src={`${baseImageUrl}${movie.poster_path}`} ></img>
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

    <CustomPagination   />

    </div>
    </ThemeProvider>
    </>
  );
}
export default Movies;


 



