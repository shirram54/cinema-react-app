import React, { useContext } from 'react';
import Movie from '../../components/Movie/Movie';
import MoviesContext from '../../MoviesContext';
import "./Movies.css";


const Movies = () => {
    const { movies } = useContext(MoviesContext);


    return (
        <div className="search-movies-page">
            <div className="title-search-page">Search Movies</div>
            <div className="movies-search">
                {movies.map(movie =>
                    <Movie movie={movie} />
                )}
            </div>
        </div>
    )
}

export default Movies;