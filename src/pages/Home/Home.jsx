import { useContext } from "react";
import Movies from "../../components/Movies/Movies";
import MoviesContext from "../../MoviesContext";
import "./Home.css";


function Home() {
  const { movies } = useContext(MoviesContext);

  return (
    <div>
      <Movies movies={movies} />
    </div>
  );
}

export default Home;









