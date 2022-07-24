import { useContext } from "react";
import Header from "../../components/Header/Header";
import Movies from "../../components/Movies/Movies";
import MoviesContext from "../../MoviesContext";
import "./Home.css";


function Home() {
  const {movies} = useContext(MoviesContext);

  return (
    <div>
      <Header />
      <Movies  movies={movies}  /> 
    </div>
  );
}

export default Home;









