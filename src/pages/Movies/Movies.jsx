import React, { useContext } from 'react';
import Movie from '../../components/Movie/Movie';
import MoviesContext from '../../MoviesContext';
import "./Movies.css";


const Movies = () => {
    const { movies } = useContext(MoviesContext);


    return (
        <div className="movie-page-search">
            {movies.map(movie =>
                <Movie movie={movie} />
            )}
        </div>
    )
}

export default Movies;