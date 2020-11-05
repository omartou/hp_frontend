import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Quiz = () => {
  const [randomCharacter, setRandomCharacter] = useState({});

  useEffect(() => {
    axios
      .get('http://localhost:8080/quiz/house/random')
      .then((res) => setRandomCharacter(res.data));
  }, []);
  console.log(randomCharacter);

  return (
    <div>
      <h1>HouseQuiz</h1>
      <div>
        <p>Guess which house the character is in!</p>
        <p>Lives : 0</p>
        <p>Score : 0</p>
      </div>
      <div className='question'>
        {randomCharacter ? <div>{randomCharacter.name}</div> : <div></div>}
      </div>
      <div className='answer'>
        <div>Gryffindor</div>
        <div>Hufflepuff</div>
        <div>Slytherin</div>
        <div>Ravenclaw</div>
      </div>
    </div>
  );
};
export default Quiz;
