import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { Route, useLocation } from "react-router-dom";

import Header from "./UI/header/header";
import theme from "./UI/theme";
import Footer from "./UI/footer";

import Home from "./Home/home";
import AdvancedSearch from "./AdvancedSearch/AdvancedSearch/advancedSearch";
import AboutMovie from "./AdvancedSearch/AboutMovie";
import News from "./News/news";
import EditNews from "./Admin/Edit/EditNews/EditNews";
import NewNews from "./Admin/New/NewNews";
import NewMovie from "./Admin/New/NewMovie/NewMovie";
import EditMovie from "./Admin/Edit/EditMovie/EditMovie";
import NewPerson from "./Admin/New/NewPerson";
import InstitucionalContent from "./InstitucionalContent/InstitucionalContent";

import { SecureRoute, Security, LoginCallback } from "@okta/okta-react";
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";
import { useHistory } from "react-router-dom";
import AdminHome from "./Admin/AdminHome";
import Protected from "./Admin/Protected";
import Login from "./Auth/SignIn";
import { oktaAuthConfig, oktaSignInConfig } from "./Auth/config";

const oktaAuth = new OktaAuth(oktaAuthConfig);

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
  //console.log(window.location.origin);
  //console.log(window.location.href);

  return (
    <Security
      oktaAuth={oktaAuth}
      restoreOriginalUri={restoreOriginalUri}
      onAuthRequired={customAuthHandler}
    >
      <ThemeProvider theme={theme}>
        <Header />

        <Route exact path="/home/" component={Home}></Route>

        <Route exact path="/News/:id" component={News}></Route>
        <Route exact path="/News/" component={News}></Route>
        <Route exact path="/Edit/News/:id" component={EditNews}></Route>
        <Route exact path="/New/News/:id" component={NewNews}></Route>

        <Route exact path="/New/Movie/" component={NewMovie}></Route>
        <Route exact path="/Edit/Movie/" component={EditMovie}></Route>

        <Route
          exact
          path="/Institucional/:id"
          component={InstitucionalContent}
        ></Route>

        <Route exact path="/New/People/" component={NewPerson}></Route>

        <Route
          path="/Aboutmovie"
          movieCode={query.get("movieCode")}
          exact={true}
          component={AboutMovie}
        />
        <Route
          path="/login"
          render={() => <Login config={oktaSignInConfig} />}
        />
        <SecureRoute path="/Admin" exact={true} component={AdminHome} />
        <SecureRoute path="/protected" component={Protected} />
        <Route path="/login/callback" component={LoginCallback} />

        <Route
          exact
          path="/busquedaavancada/:pathParam1?/:pathParam2?"
          component={AdvancedSearch}
        ></Route>

        <Footer />
      </ThemeProvider>
    </Security>
  );
}

export default App;
