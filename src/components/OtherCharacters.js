import React, { useEffect, useState } from "react";
import Character from "./Character";
import Content from "../styled_components/Content";
import Datafetcher from "../service/Datafetcher";

const OtherCharacters = (props) => {
  const [otherCharacters, setOtherCharacters] = useState([]);
  const dataFetcher = new Datafetcher();

  useEffect(() => {
    props.setTitle("Other characters");
    dataFetcher.fetch("http://localhost:8080/other", setOtherCharacters);
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
