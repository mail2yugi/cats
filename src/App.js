
import React from "react";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import GreetingCat from "./components/GreetingCat";
import RandomCat from "./components/RandomCat";
import "./App.css";

const defaultHistory = createBrowserHistory();

function App({ history = defaultHistory }) {
  return (
    <Router history={history}>
      <Route exact path="/container-app" component={RandomCat} />
      <Route exact path="/cat/:greeting" component={GreetingCat} />
    </Router>
  );
}


export default App;
