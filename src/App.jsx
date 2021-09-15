import React from "react";
import Navbar from "./components/Navbar";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";

import Footer from "./components/Footer";
import Home from "./Home.jsx";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Propiedad from "./Propiedad";
import Catalogo from "./Catalogo";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4C7CE3",
      dark: "#62cec5",
    },
    secondary: {
      main: "#717580",
    },
  },
});

const App = (props) => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path='/propiedades/:slug/:id'>
              <Propiedad></Propiedad>
            </Route>
            <Route exact path='/'>
              <Home/>
            </Route>
            <Route exact path='/acercade'>
              <AboutUs></AboutUs>
            </Route>
            <Route  exact path='/contacto'>
              <ContactUs></ContactUs>
            </Route>
            <Route exact path='/tipo/:type'>
              <Catalogo/>
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
};

export default App;
