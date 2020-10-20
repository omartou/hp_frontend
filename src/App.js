import React from 'react';
import './App.css';
import { GlobalStyles } from './components/GlobalStyle';
import { CharacterProvider } from './components/CharacterContext';
import CharacterList from './components/CharacterList';

const App = (props) => {
  return (
    <CharacterProvider>
      <div className='App'>
        <GlobalStyles />

        <h1>Harry Potter</h1>
        <CharacterList />
      </div>
    </CharacterProvider>
  );
};

export default App;
