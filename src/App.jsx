import {  Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import MovieDetails from "./pages/MovieDetails";
import MoviesContext from "./MoviesContext";
import { useEffect, useState } from "react";
import { getPopularMovies } from "./services/moviesAPI";
import PageContext from "./PageContext";

function App() {

  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  
  const fetchPopularMovies = (page) => {
    getPopularMovies(page)
    .then((response)=>response.json())
    .then((responseJson)=> {
    setMovies(responseJson.results)
    });
  }

  useEffect(()  => {
    fetchPopularMovies(page);
  },[page])



  return (
    <div className="app">
   <MoviesContext.Provider value={{movies}}>
   <PageContext.Provider value={{page, setPage}}>
    <BrowserRouter className="pages">
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Movies/:id" element={< MovieDetails />} />
      </Routes>
      </BrowserRouter>
      </PageContext.Provider>
      </MoviesContext.Provider>
   </div>
  );
}

export default App;

