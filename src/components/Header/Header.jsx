import * as React from 'react';
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import "./Header.css";

function Header() {
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
  <div onClick={() => window.scroll(0, 0)} className="header">
  <Link  className="main-title" to="/">
  GoCinema 
  </Link>{" "}
 </div>
 </ThemeProvider>
    </>
  );
}

export default Header;


