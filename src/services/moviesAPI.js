const baseURL = "https://api.themoviedb.org/3";
const apiKey = "e963fb7c1193b9e95a11600ea3f5f3f0";

export const normalImageUrl = "https://image.tmdb.org/t/p/w500";
export const originalImageUrl = "https://image.tmdb.org/t/p/original";

export const getPopularMovies = async (page = 1) => {
  return fetch(
    `${baseURL}/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`
  );
};

export const searchMovies = async (query, page = 1) => {
  return fetch(
    `${baseURL}/search/movie?api_key=${apiKey}&language=en-US&page=${page}&query=${query}`
  );
};

export const getTopRatedMovies = async (page = 1) => {
  return fetch(
    `${baseURL}/movie/top_rated?api_key=${apiKey}&language=en-US&page=${page}`
  );
};

export const getUpComingMovies = async (page = 1) => {
  return fetch(
    `${baseURL}/movie/upcoming?api_key=${apiKey}&language=en-US&page=${page}`
  );
};

export const getMovieDetails = async (id) => {
  return fetch(`${baseURL}/movie/${id}?api_key=${apiKey}`);
};
