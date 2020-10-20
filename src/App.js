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
    <Router>
      <div className="App">
        <GlobalStyles />
          <Route path="/hogwarts/houses">
            <HouseSelection/>
          </Route>
          <Route exact path="/">
              <h1>Harry Potter</h1>
          </Route>
      </div>
    </Router>
  );
};

export default App;
