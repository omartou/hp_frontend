import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from "react-router-dom";
import { GlobalStyles } from "./components/GlobalStyle";
import HouseSelection from "./hooks/HouseSelection";

const App = (props) => {
  return (
    <div className="App">
      <Router>
        <GlobalStyles />
        <Switch>
          <Route path="/hogwarts/houses">
            <HouseSelection/>
          </Route>
          <Route path="/">
              <h1>Harry Potter</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
