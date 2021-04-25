import { useState, useEffect } from "react";
import { Container, Paper } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core";
import { useDispatch } from "react-redux";

import Routes from "./Routes";
import NavBar from "./components/NavBar";

import { checkToken } from "redux/actions/auth";

function App() {
  const darkModePreference = localStorage.getItem("darkMode");
  const dispatch = useDispatch();
  const [darkMode, setDarkMode] = useState(
    darkModePreference ? darkModePreference === "true" : false
  );

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
      primary: {
        light: "#757ce8",
        main: "#448aff",
        dark: "#5B6057",
        contrastText: "#ffffff",
      },
      secondary: {
        light: "#ff7961",
        main: "#3DA35D",
        contrastText: "#ffffff",
      },
      grey: {
        800: "#ff4242",
      },
      contrastThreshold: 3,
      tonalOffset: 0.2,
    },
  });

  useEffect(() => {
    dispatch(checkToken());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Paper className="main" square>
        <NavBar setDarkMode={setDarkMode} darkMode={darkMode} />
        <Container maxWidth="lg">
          <Routes setDarkMode={setDarkMode} darkMode={darkMode} />
        </Container>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
