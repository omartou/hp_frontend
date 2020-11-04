import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { GlobalStyles } from './components/GlobalStyle';
import { CharacterProvider } from './components/context/CharacterContext';
import HouseCharacters from './components/HouseCharacters';
import EmployeeCharacters from './components/EmployeeCharacter';
import { HouseMemberProvider } from './components/context/HouseMemberContext';
import HomePage from './components/HomePage';
import Details from './components/Details';
import MinistryCharacters from './components/MinistryCharacters';
import OtherCharacters from './components/OtherCharacters';
import HogwartsPage from './components/HogwartsPage';
import Navbar from './components/Navbar';

const App = (props) => {
  const [title, setTitle] = useState([]);

  return (
    <Router>
      <CharacterProvider>
        <div className='App'>
          <Navbar title={title} />
          <GlobalStyles />
          <Route exact path='/'>
            <HomePage setTitle={setTitle} />
          </Route>
          <Route exact path='/hogwarts'>
            <HogwartsPage setTitle={setTitle} />
          </Route>
          <Route exact path='/ministry'>
            <MinistryCharacters setTitle={setTitle} />
          </Route>
          <Route exact path='/other'>
            <OtherCharacters setTitle={setTitle} />
          </Route>
          <Route exact path='/employees'>
            <EmployeeCharacters setTitle={setTitle} />
          </Route>
          <HouseMemberProvider>
            <Route exact path='/gryffindor'>
              <HouseCharacters setTitle={setTitle} house='Gryffindor' />
            </Route>
            <Route exact path='/hufflepuff'>
              <HouseCharacters setTitle={setTitle} house='Hufflepuff' />
            </Route>
            <Route exact path='/ravenclaw'>
              <HouseCharacters setTitle={setTitle} house='Ravenclaw' />
            </Route>
            <Route exact path='/slytherin'>
              <HouseCharacters setTitle={setTitle} house='Slytherin' />
            </Route>
          </HouseMemberProvider>
          <Route
            exact
            path='/character/:id'
            component={Details}
            setTitle={setTitle}
          ></Route>
        </div>
      </CharacterProvider>
    </Router>
  );
};

export default App;
