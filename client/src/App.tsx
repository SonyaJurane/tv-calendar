import React from "react";
import { Route, Routes } from "react-router-dom";
import { Main, About, Landing, Search } from "./pages";
import { createTheme, ThemeProvider } from "@mui/material";
// import Paper from '@mui/material/Paper';
// import Image from "./background.png";

const theme = createTheme({
  typography: {
    fontFamily: "Open Sans",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightBold: 600,
    h1: {
      fontFamily: "Sora",
      fontSize: 92,
    },
    h2: {
      fontSize: 34,
      lineHeight: 1.5,
    },
    button: {
      fontFamily: "Sora",
      fontSize: 32,
      textTransform: "lowercase",
      letterSpacing: "0.08em",
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          size: "500",
          border: "2px solid #000000",
          borderRadius: "55.5px",
          width: "395px",
          height: "111px",
          color: "#000000",
          "&:hover": {
            color: "#ffffff",
            backgroundColor: "black",
          },
        },
      },
    },
  },
});

export const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
