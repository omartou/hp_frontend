import React, { useContext } from 'react';
import { CharacterContext } from './CharacterContext';

const Details = (props) => {
  const characterId = props.match.params.id;
  const [characters] = useContext(CharacterContext);
  const characterDetails = characters.filter(
    (character) => character._id === characterId
  )[0];
  if (characterDetails) {
    return (
      <div>
        <p>{characterDetails.name}</p>
        {characterDetails.alias ? <p>{characterDetails.alias}</p> : null}
        <p>{characterDetails.species}</p>
        {characterDetails.bloodStatus === 'unknown' ? null : (
          <p>Blood type: {characterDetails.bloodStatus}</p>
        )}
        <p>{characterDetails.school}</p>
        {characterDetails.house ? <p>{characterDetails.house}</p> : null}
        {characterDetails.role ? <p>{characterDetails.role}</p> : null}
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
        {characterDetails.wand ? <p>Wand: {characterDetails.wand}</p> : null}
        {characterDetails.boggart ? (
          <p>Boggart: {characterDetails.boggart}</p>
        ) : null}
      </div>
    );
  } else {
    return <div></div>;
  }
};
export default Details;
