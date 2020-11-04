import React, { useEffect, useState } from 'react';
import Character from './Character';
import Content from '../styled_components/Content';
import axios from 'axios';

const EmployeeCharacters = (props) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    props.setTitle('Employees');
    axios
      .get('http://localhost:8080/hogwarts/employees')
      .then((res) => setCharacters(res.data));
  }, [props]);

  return (
    <Content>
      <div className='grid-container'>
        {characters.map((character) => {
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
export default EmployeeCharacters;
