import React, { useEffect, useState } from "react";
import Character from "./Character";
import Content from "../styled_components/Content";
import Datafetcher from "../service/Datafetcher";


const HouseCharacters = (props) => {
  const [houseCharacters, setHouseCharacters] = useState([]);
  const dataFetcher = new Datafetcher();

  useEffect(() => {
    props.setTitle(props.house);
    dataFetcher.fetch(`http://localhost:8080/hogwarts/houses/${props.house}`, setHouseCharacters);
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
