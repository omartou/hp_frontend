import React, { useContext } from 'react';
import { CharacterContext } from './context/CharacterContext';
import Character from './Character';
import Logo from './Logo';

const EmployeeCharacters = (props) => {
  const [characters] = useContext(CharacterContext);
  if (characters.length === 0) {
    return <p>Character is loading...</p>;
  } else {
    return (
      <div>
        <Logo />
        <div className='grid-container'>
          {characters
            .filter(
              (character) =>
                character.role && character.role.split(',')[0] === 'Professor'
            )
            .map((character) => {
              return (
                <Character
                  key={character._id}
                  name={character.name}
                  charId={character._id}
                  species={character.species}
                />
              );
            })}
        </div>
      </div>
    );
  }
};
export default EmployeeCharacters;
