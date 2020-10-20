import React, { useContext } from 'react';
import { CharacterContext } from './CharacterContext';
import { HouseMemberContext } from './HouseMemberContext';

const HouseCharacters = (props) => {
  const [characters] = useContext(CharacterContext);
  const [houses] = useContext(HouseMemberContext);

  if (characters.length === 0 && houses.length === 0) {
    return <p>Character is loading...</p>;
  } else {
    const houseMembers = houses.filter((house) => house.name === props.house)[0]
      .members;
    return (
      <div>
        {characters
          .filter((character) => houseMembers.includes(character._id))
          .map((character) => {
            return <div key={character._id}>{character.name}</div>;
          })}
      </div>
    );
  }
};
export default HouseCharacters;
