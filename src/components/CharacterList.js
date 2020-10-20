import React, { useContext } from 'react';
import { CharacterContext } from './CharacterContext';

const CharacterList = () => {
  const [characters] = useContext(CharacterContext);
  return (
    <div>
      {characters.map((character) => {
        return <div key={character._id}>{character.name}</div>;
      })}
    </div>
  );
};
export default CharacterList;
