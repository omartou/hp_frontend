import React, { useEffect, useState } from 'react';
import Character from './Character';
import Content from '../styled_components/Content';
import Datafetcher from '../service/Datafetcher';

const MinistryCharacters = (props) => {
  const [ministryCharacters, setMinistryCharacters] = useState([]);
  const dataFetcher = new Datafetcher();

  useEffect(() => {
    props.setTitle('Ministry');
    dataFetcher.fetch(
      'http://localhost:8080/ministry',
      setMinistryCharacters
    );
  }, [props]);

  return (
    <Content>
      <div className='grid-container'>
        {ministryCharacters.map((character) => {
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
};
export default MinistryCharacters;
