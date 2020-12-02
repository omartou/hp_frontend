import React, { useEffect, useState } from 'react';
import Character from './Character';
import Content from '../styled_components/Content';
import Datafetcher from "../service/Datafetcher";

const EmployeeCharacters = (props) => {
  const [characters, setCharacters] = useState([]);
  const dataFetcher = new Datafetcher();

  useEffect(() => {
    props.setTitle("Employees");
    dataFetcher.fetch("http://localhost:8080/hogwarts/employees", setCharacters);
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
