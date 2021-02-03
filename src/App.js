import React, { useState } from "react";
import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Details from "./Details";
import ThemeContext from "./ThemeContext";

const App = () => {
  const themeHook = useState("");
  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
        <Router>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Switch>
            <Route path="/details/:id" component={Details} />
            <Route exact path="/">
              <SearchParams />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
