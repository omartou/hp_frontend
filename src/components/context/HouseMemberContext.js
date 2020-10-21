import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const HouseMemberContext = createContext();

export const HouseMemberProvider = (props) => {
  const [houses, setHouses] = useState([]);
  const apiKey =
    '?key=$2a$10$YRrEHkZM8w36IMLDlexdV.vKImwT9ZClX1CDFYaPFtIPYR3zYs8Da';

  useEffect(() => {
    axios.get('https://www.potterapi.com/v1/houses' + apiKey).then((res) => {
      setHouses(res.data);
    });
  });

  return (
    <HouseMemberContext.Provider value={[houses]}>
      {props.children}
    </HouseMemberContext.Provider>
  );
};
