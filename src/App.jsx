import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import MoviesContext from "./MoviesContext";
import { useEffect, useState } from "react";
import { getPopularMovies, searchMovies, getTopRatedMovies, getUpComingMovies } from "./services/moviesAPI";
import PageContext from "./PageContext";
import Header from "./components/Header/Header";
import Movies from "./pages/Movies/Movies";

function App() {

  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upComingMovies, setUpComingMovies] = useState([]);

  const fetchPopularMovies = () => {
    getPopularMovies()
      .then((response) => response.json())
      .then((responseJson) => {
        setPopularMovies(responseJson.results)
      });
  }

  useEffect(() => {
    fetchPopularMovies();
  }, [])

  const fetchTopRatedMovies = () => {
    getTopRatedMovies()
      .then((response) => response.json())
      .then((responseJson) => {
        setTopRatedMovies(responseJson.results)
      });
  }

  useEffect(() => {
    fetchTopRatedMovies();
  }, [])


  const fetchUpComingMovies = () => {
    getUpComingMovies()
      .then((response) => response.json())
      .then((responseJson) => {
        setUpComingMovies(responseJson.results)
      });
  }

  useEffect(() => {

    fetchUpComingMovies();

  }, [])


  const fetchSearchMovies = (query, page) => {
    searchMovies(query, page)
      .then((response) => response.json())
      .then((responseJson) => {
        setMovies(responseJson.results)
      });
  }

  useEffect(() => {
    if (query.length) {
      fetchSearchMovies(query, page);
    }
  }, [query, page])

  return (
    <div className="app">
      <MoviesContext.Provider value={{ movies, setQuery, popularMovies, topRatedMovies, upComingMovies }}>
        <PageContext.Provider value={{ page, setPage }}>
          <BrowserRouter className="pages">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Movies />} />
              <Route path="/Movies/:id" element={< MovieDetails />} />
            </Routes>
          </BrowserRouter>
        </PageContext.Provider>
      </MoviesContext.Provider>
    </div>
  );
}

export default App;

