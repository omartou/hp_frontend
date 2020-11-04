import React, { useEffect, useState } from "react";
import Character from "./Character";
import Content from "../styled_components/Content";
import axios from "axios";

const OtherCharacters = (props) => {
  const [otherCharacters, setOtherCharacters] = useState([]);

  useEffect(() => {
    props.setTitle("Other characters");
    axios
      .get("http://localhost:8080/other")
      .then((res) => setOtherCharacters(res.data));
  }, [props]);

  return (
    <Content>
      <div className="grid-container">
        {otherCharacters.map((character) => {
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
export default OtherCharacters;
