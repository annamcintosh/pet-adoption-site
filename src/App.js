import React from "react";
import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Details from "./Details";

const App = () => {
  return (
    <div>
      <Router>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Switch>
          <Route path="/details/:id">
            <Details />
          </Route>
          <Route exact path="/">
            <SearchParams />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
