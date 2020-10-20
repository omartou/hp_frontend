import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { GlobalStyles } from './components/GlobalStyle';
import { CharacterProvider } from './components/CharacterContext';
import CharacterList from './components/CharacterList';
import HouseSelection from './components/HouseSelection';
import HouseCharacters from './components/HouseCharacters';
import EmployeeCharacters from './components/EmployeeCharacter';
import { HouseMemberProvider } from './components/HouseMemberContext';
import HomePage from './components/HomePage';

const App = (props) => {
  return (
    <Router>
      <CharacterProvider>
        <div className='App'>
          <GlobalStyles />
          <Route exact path='/'>
            <HomePage/>
{/*             <h1>Harry Potter</h1>
            <Link to='/hogwarts'>Hogwarts</Link>
            <br />
            <Link to='/ministry'>Ministry</Link>
            <br />
            <Link to='/other'>Other characters</Link>
            <br /> */
            }
          </Route>
          <Route exact path='/hogwarts'>
            <Link to='/houses'>Houses</Link>
            <br />
            <Link to='/employees'>Employees</Link>
            <br />
          </Route>
          <Route exact path='/ministry'>
            <CharacterList />
          </Route>
          <Route exact path='/other'>
            <CharacterList />
          </Route>
          <Route exact path='/houses'>
            <HouseSelection />
          </Route>
          <Route exact path='/employees'>
            <EmployeeCharacters />
          </Route>
          <HouseMemberProvider>
            <Route exact path='/gryffindor'>
              <HouseCharacters house='Gryffindor' />
            </Route>
            <Route exact path='/hufflepuff'>
              <HouseCharacters house='Hufflepuff' />
            </Route>
            <Route exact path='/ravenclaw'>
              <HouseCharacters house='Ravenclaw' />
            </Route>
            <Route exact path='/slytherin'>
              <HouseCharacters house='Slytherin' />
            </Route>
          </HouseMemberProvider>
          <Route exact path='/character/id'></Route>
        </div>
      </CharacterProvider>
    </Router>
  );
};

export default App;
