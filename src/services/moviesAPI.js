const baseURL = "https://api.themoviedb.org/3";
const apiKey = "e963fb7c1193b9e95a11600ea3f5f3f0";

export const getPopularMovies = async (page) => {
  return fetch(
    `${baseURL}/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`
  );
};

// export const getPopularMovies = async (page=1) => {
//   return fetch(
//     `${baseURL}/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`
//   );
// };
