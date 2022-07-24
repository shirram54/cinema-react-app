import "./MovieDetails.css";
import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles"
import Header from "../components/Header/Header";

function MovieDetails() {
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
      <Header/>
      <div className="video-page">
         <a className="play-btn" href="#"></a>
         </div>
      </ThemeProvider>
      </>
)}
   
  
  

export default MovieDetails;




