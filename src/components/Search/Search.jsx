import React, { useContext, useRef } from 'react';
import "./Search.css";
import MoviesContext from "../../MoviesContext";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Button } from '@mui/material';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import PageContext from '../../PageContext';
import { useLocation, useNavigate } from 'react-router-dom';


const Search = () => {
  const { setQuery } = useContext(MoviesContext);
  const { setPage } = useContext(PageContext)
  const navigate = useNavigate()
  const searchRef = useRef()

  const handleMoviesChange = (event) => {
    setQuery(searchRef.current.value)
    navigate('/search')
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#422d61",
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="search-box">
          <input
            ref={searchRef}
            onChange={e => {
              const value = e.target.value
              if (!value.length) {
                setTimeout(() => {
                  setQuery('')
                  setPage(1)
                }, 1000)
              }
            }}
            type="text"
            placeholder="Search for movie"
          />
          <Button
            onClick={handleMoviesChange}
            type="submit"
            value="SEARCH"
            variant="contained"
            sx={{ marginLeft: 1 }}
          >
            <SearchRoundedIcon sx={{ fontSize: "30px" }} />
          </Button>
        </div>

      </ThemeProvider>
    </>
  )
}

export default Search;


