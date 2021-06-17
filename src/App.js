import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { HashRouter, Route, Switch, useLocation } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./UI/header/header";
import theme from "./UI/theme";
import Footer from "./UI/footer";

import Home from "./Home/home";
import AboutUs from "./About/aboutus";
import Oque from "./About/aboutfilms";
import AdvancedSearch from "./AdvancedSearch/AdvancedSearch/advancedSearch";
import AboutMovie from "./AdvancedSearch/AboutMovie";
import News from "./News/news";
import EditNews from "./Admin/Edit/EditNews";
import NewNews from "./Admin/New/NewNews";
import NewMovie from "./Admin/New/NewMovie/NewMovie";
import EditMovie from "./Admin/Edit/EditMovie/EditMovie";
import NewPerson from "./Admin/New/NewPerson";
import InstitucionalContent from "./InstitucionalContent/InstitucionalContent";

import { SecureRoute, Security, LoginCallback } from "@okta/okta-react";
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";
import { useHistory } from "react-router-dom";
import AdminHome from "./AdminHome";
import Protected from "./Admin/Protected";
import Login from "./Auth/SignIn";
import { oktaAuthConfig, oktaSignInConfig } from "./Auth/config";

const oktaAuth = new OktaAuth(oktaAuthConfig);
// const oktaAuth = new OktaAuth({
//   issuer: "https://dev-84194233.okta.com/oauth2/default",
//   clientId: "0oakfukpidZQWVZhi5d6",
//   redirectUri: window.location.origin + "/login/callback",
// });

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function App() {
  let query = useQuery();
  const history = useHistory();
  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    history.replace(toRelativeUrl(originalUri, window.location.origin));
  };

  const customAuthHandler = () => {
    history.push("/login");
  };
  console.log(window.location.origin);
  console.log(window.location.href);

  return (
    <Security
      oktaAuth={oktaAuth}
      restoreOriginalUri={restoreOriginalUri}
      onAuthRequired={customAuthHandler}
    >
      <ThemeProvider theme={theme}>
        <Header />

        <Route exact path="/cine_baiano/home/" component={Home}></Route>
        <Route exact path="/cine_baiano/quemsomos" component={AboutUs}></Route>
        <Route exact path="/cine_baiano/filmebaiano" component={Oque}></Route>

        <Route exact path="/cine_baiano/News/:id" component={News}></Route>
        <Route exact path="/cine_baiano/News/" component={News}></Route>
        <Route
          exact
          path="/cine_baiano/Edit/News/:id"
          component={EditNews}
        ></Route>
        <Route
          exact
          path="/cine_baiano/New/News/:id"
          component={NewNews}
        ></Route>

        <Route
          exact
          path="/cine_baiano/New/Movie/"
          component={NewMovie}
        ></Route>
        <Route
          exact
          path="/cine_baiano/Edit/Movie/"
          component={EditMovie}
        ></Route>

        <Route
          exact
          path="/cine_baiano/Institucional/:id"
          component={InstitucionalContent}
        ></Route>

        <Route
          exact
          path="/cine_baiano/New/People/"
          component={NewPerson}
        ></Route>

        <Route
          path="/cine_baiano/Aboutmovie"
          movieCode={query.get("movieCode")}
          exact={true}
          component={AboutMovie}
        />
        <Route
          path="/cine_baiano/login"
          render={() => <Login config={oktaSignInConfig} />}
        />
        <SecureRoute
          path="/cine_baiano/Admin"
          exact={true}
          component={AdminHome}
        />
        <SecureRoute path="/cine_baiano/protected" component={Protected} />
        <Route path="/cine_baiano/login/callback" component={LoginCallback} />

        <Route
          exact
          path="/cine_baiano/busquedaavancada/:pathParam1?/:pathParam2?"
          component={AdvancedSearch}
        ></Route>

        <Footer />
      </ThemeProvider>
    </Security>
  );
}

export default App;
