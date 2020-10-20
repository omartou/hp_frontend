import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from "react-router-dom";
import { GlobalStyles } from "./components/GlobalStyle";
import { CharacterProvider } from './components/CharacterContext';
import CharacterList from './components/CharacterList';
import HouseSelection from "./hooks/HouseSelection";

const App = (props) => {
  return (
    <Router>
      <CharacterProvider>
      <div className="App">
        <GlobalStyles />
          <Route path="/hogwarts/houses">
            <HouseSelection/>
          </Route>
          <Route exact path="/">
              <h1>Harry Potter</h1>
          </Route>
      </div>
      </CharacterProvider>
    </Router>
  );
};

export default App;
