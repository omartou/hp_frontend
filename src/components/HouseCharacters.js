import React, { useEffect, useState } from "react";
import Character from "./Character";
import Content from "../styled_components/Content";
import axios from "axios";

const HouseCharacters = (props) => {
  const [houseCharacters, setHouseCharacters] = useState([]);

  useEffect(() => {
    props.setTitle(props.house);
    axios
      .get(`http://localhost:8080/hogwarts/houses/${props.house}`)
      .then((res) => setHouseCharacters(res.data));
  }, [props]);

  return (
    <Content>
      <div className="grid-container">
        {houseCharacters.map((character) => {
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
export default HouseCharacters;
