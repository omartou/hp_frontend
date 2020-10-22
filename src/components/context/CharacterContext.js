import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const CharacterContext = createContext();

export const CharacterProvider = (props) => {
  const [characters, setCharacters] = useState([]);
  const apiKey =
    '?key=$2a$10$YRrEHkZM8w36IMLDlexdV.vKImwT9ZClX1CDFYaPFtIPYR3zYs8Da';

  useEffect(() => {
    axios
      .get('https://www.potterapi.com/v1/characters' + apiKey)
      .then((res) => {
        setCharacters(res.data);
      });
  });

  return (
    <CharacterContext.Provider value={[characters]}>
      {props.children}
    </CharacterContext.Provider>
  );
};
