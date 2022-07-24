import React, { useContext, useState } from 'react';
import "./Search.css";
import Autocomplete from '@mui/material/Autocomplete';
import Stack from "@mui/material/Stack";
import MoviesContext from "../../MoviesContext";
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Button } from '@mui/material';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';


const Search = () => {
  const { movies } = useContext(MoviesContext);

  const handleMoviesChange = (movies) => {
    setMoviesFilter(movies.map((movie) => movie.title));
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
          <Stack spacing={3} sx={{ width: 700 }}>
            <Autocomplete
              onChange={(e, values) => handleMoviesChange(values)}
              id="combo-box-demo"
              type="search"
              options={movies}
              getOptionLabel={movie => movie.original_title}
              sx={{ width: 300, bgcolor: 'white', borderRadius: 1.5 }}
              renderInput={(params) =>
                <TextField
                  {...params}
                  label="Search for movie"
                />}
            />
          </Stack>

          <Button
            // onClick={handleMoviesChange}
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


