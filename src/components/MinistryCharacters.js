import React, { useContext, useEffect } from 'react';
import { CharacterContext } from './context/CharacterContext';
import Character from './Character';
import Content from '../styled_components/Content';

const MinistryCharacters = (props) => {
  const [characters] = useContext(CharacterContext);

  useEffect(() => {
    props.setTitle("Ministry")
  }, [])

  if (characters.length === 0) {
    return <p>Character is loading...</p>;
  } else {
    return (
      <Content>
        <div className='grid-container'>
          {characters
            .filter((character) => character.ministryOfMagic)
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
      </Content>
    );
  }
};
export default MinistryCharacters;
