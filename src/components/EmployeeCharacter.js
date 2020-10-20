import React, { useContext } from 'react';
import { CharacterContext } from './CharacterContext';

const EmployeeCharacters = (props) => {
  const [characters] = useContext(CharacterContext);
  if (characters.length === 0) {
    return <p>Character is loading...</p>;
  } else {
    return (
      <div>
        {characters.map((character) => {
          return <div key={character._id}>{character.name}</div>;
        })}
      </div>
    );
  }
};
export default EmployeeCharacters;
