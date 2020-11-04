import React, { useEffect, useState } from "react";
import Character from "./Character";
import Content from "../styled_components/Content";
import axios from "axios";

const MinistryCharacters = (props) => {
  const [ministryCharacters, setMinistryCharacters] = useState([]);

  useEffect(() => {
    props.setTitle("Ministry");
    axios
      .get("http://localhost:8080/hogwarts/ministry")
      .then((res) => setMinistryCharacters(res.data));
  }, [props]);

  return (
    <Content>
      <div className="grid-container">
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
