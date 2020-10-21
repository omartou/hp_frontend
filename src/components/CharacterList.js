import React, { useContext } from 'react';
import { CharacterContext } from './CharacterContext';
import Character from "./Character";
import Logo from "./Logo"

const CharacterList = () => {
  const [characters] = useContext(CharacterContext);
  if (characters.length === 0) {
    return (
      <p>Character is loading...</p>
    )
  } else {
    console.log(characters);
    return (
      <div>
        <Logo/>
        <div className='grid-container'>
          {characters.map((character) => {
            return (
              <Character 
                key={character._id}
                name={character.name} 
                charId={character._id} 
                species={character.species}
              />);
          })}
        </div>
      </div>
    );
  }
};
export default CharacterList;
