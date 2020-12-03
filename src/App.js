import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { GlobalStyles } from "./components/GlobalStyle";
import HouseCharacters from "./components/HouseCharacters";
import EmployeeCharacters from "./components/EmployeeCharacter";
import HomePage from "./components/HomePage";
import Details from "./components/Details";
import MinistryCharacters from "./components/MinistryCharacters";
import OtherCharacters from "./components/OtherCharacters";
import HogwartsPage from "./components/HogwartsPage";
import Navbar from "./components/Navbar";
import Quiz from "./components/Quiz";
import LoginPage from "./components/LoginPage";
import Registration from "./components/Registration";
import Wand from "./components/Wand";
import SortingHat from "./components/SortingHat";
import CharacterEdit from "./components/CharacterEdit";

const App = (props) => {
  const [title, setTitle] = useState([]);

  return (
    <Router>
      <div className="App">
        <Navbar title={title} />
        <GlobalStyles />
        <Route exact path="/">
          <HomePage setTitle={setTitle} />
        </Route>
        <Route exact path="/hogwarts">
          <HogwartsPage setTitle={setTitle} />
        </Route>
        <Route exact path="/ministry">
          <MinistryCharacters setTitle={setTitle} />
        </Route>
        <Route exact path="/other">
          <OtherCharacters setTitle={setTitle} />
        </Route>
        <Route exact path="/employees">
          <EmployeeCharacters setTitle={setTitle} />
        </Route>
        <Route exact path="/gryffindor">
          <HouseCharacters setTitle={setTitle} house="Gryffindor" />
        </Route>
        <Route exact path="/hufflepuff">
          <HouseCharacters setTitle={setTitle} house="Hufflepuff" />
        </Route>
        <Route exact path="/ravenclaw">
          <HouseCharacters setTitle={setTitle} house="Ravenclaw" />
        </Route>
        <Route exact path="/slytherin">
          <HouseCharacters setTitle={setTitle} house="Slytherin" />
        </Route>
        <Route exact path="/quiz">
          <Quiz setTitle={setTitle} />
        </Route>
        <Route exact path="/login">
          <LoginPage setTitle={setTitle} />
        </Route>
        <Route exact path="/registration">
          <Registration setTitle={setTitle} />
        </Route>
        <Route exact path="/wands">
          <Wand setTitle={setTitle} />
        </Route>
        <Route exact path="/hat">
          <SortingHat setTitle={setTitle} />
        </Route>
        <Route
          exact
          path="/character/:id"
          component={Details}
          setTitle={setTitle}
        ></Route>
        <Route
          exact
          path="/character/:id/edit"
          component={CharacterEdit}
          setTitle={setTitle}
        ></Route>
      </div>
    </Router>
  );
};

export default App;
