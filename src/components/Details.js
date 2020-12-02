import React, { useState, useEffect } from 'react';
import { CardDetails, NameOnCardDetails } from '../styled_components/index';
import Content from '../styled_components/Content';
// import axios from 'axios';
import Datafetcher from '../service/Datafetcher';

const Details = (props) => {
  const [characterDetails, setCharacterDetails] = useState();
  const dataFetcher = new Datafetcher();

  useEffect(() => {
    dataFetcher.fetchWithTokenHeader(
      `http://localhost:8080/character/${props.match.params.id}`,
      setCharacterDetails
    );
  }, [props]);

  if (characterDetails && characterDetails != "denied") {
    return (
      <Content className='character-details'>
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
          {characterDetails.bloodStatus === 'unknown' ? null : (
            <p>
              <strong>Blood type: </strong>
              {characterDetails.bloodStatus}
            </p>
          )}
          {characterDetails.school ? (
            <p>
              <strong>School: </strong>
              {characterDetails.school}
            </p>
          ) : null}
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
      </Content>
    );
  } else if (characterDetails=== "denied") {
    return ( 
    <Content>
      <div>
        <h1>You should login to see this information!</h1>
        </div>
    </Content>
    );
  } else {
    return <div></div>
  }
};
export default Details;
