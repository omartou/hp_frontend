import React, { useContext } from "react";
import { CharacterContext } from "./context/CharacterContext";
import { CardDetails, NameOnCardDetails } from "../styled_components/index";

const Details = (props) => {
  const characterId = props.match.params.id;
  const [characters] = useContext(CharacterContext);
  const characterDetails = characters.filter(
    (character) => character._id === characterId
  )[0];
  if (characterDetails) {
    return (
      <div className="character-details">
        <CardDetails>
          <NameOnCardDetails>{characterDetails.name}</NameOnCardDetails>
          {characterDetails.alias ? (
            <p>
              <strong>Alias: </strong>
              {characterDetails.alias}
            </p>
          ) : null}
          <p>
            <strong>Species: </strong>
            {characterDetails.species}
          </p>
          {characterDetails.bloodStatus === "unknown" ? null : (
            <p>
              <strong>Blood type: </strong>
              {characterDetails.bloodStatus}
            </p>
          )}
          <p>
            <strong>School: </strong>
            {characterDetails.school}
          </p>
          {characterDetails.house ? (
            <p>
              <strong>House: </strong>
              {characterDetails.house}
            </p>
          ) : null}
          {characterDetails.role ? (
            <p>
              <strong>Role: </strong>
              {characterDetails.role}
            </p>
          ) : null}
          {characterDetails.ministryOfMagic ? (
            <p>Works in the Ministry of Magic</p>
          ) : null}
          {characterDetails.orderOfPhoenix ? (
            <p>Part of the Order of Phoenix</p>
          ) : null}
          {characterDetails.dumbledoresArmy ? (
            <p>Part of Dumbledore's Army</p>
          ) : null}
          {characterDetails.deathEater ? (
            <p>One of Lord Voldemort's deatheaters</p>
          ) : null}
          {characterDetails.wand ? (
            <p>
              <strong>Wand: </strong>
              {characterDetails.wand}
            </p>
          ) : null}
          {characterDetails.boggart ? (
            <p>
              <strong>Boggart: </strong>
              {characterDetails.boggart}
            </p>
          ) : null}
        </CardDetails>
      </div>
    );
  } else {
    return <div></div>;
  }
};
export default Details;
