import React from 'react';
import "./Movie.css";
import { Link } from "react-router-dom";
import { Badge, Button } from "@mui/material";
import { normalImageUrl } from '../../services/moviesAPI';

const Movie = ({ movie }) => {


    return (
        <div class="flip-box" >
            <div className="container">
                <div className="one">
                    <img src={movie.poster_path ? `${normalImageUrl}${movie.poster_path}` : "https://w1.pngwing.com/pngs/676/659/png-transparent-imdb-logo-film-television-television-film-star-is-born-lady-gaga-yellow-text.png"} ></img>
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
                        <Link to={`/movies/${movie.id}`}>
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
    )
}

export default Movie;