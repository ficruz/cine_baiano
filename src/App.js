import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./UI/header";
import theme from "./UI/theme";
import Footer from "./UI/footer";

import Home from "./Home/home";
import AboutUs from "./About/aboutus";
import Oque from "./About/aboutfilms";

import AdvancedSearch from "./AdvancedSearch/advancedSearch";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/quemsomos" component={AboutUs}></Route>
          <Route exact path="/filmebaiano" component={Oque}></Route>
          <Route
            exact
            path="/busquedaavancada/:pathParam1?/:pathParam2?"
            component={AdvancedSearch}
          ></Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
