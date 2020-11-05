import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './Quiz.css';

const Quiz = () => {
  const [randomCharacter, setRandomCharacter] = useState({});
  const [lives, setLives] = useState(3);
  const [score, setScore] = useState(0);

  useEffect(() => {
    axios
      .get('http://localhost:8080/quiz/house/random')
      .then((res) => setRandomCharacter(res.data));
    reset();
  }, [score, lives]);

  const markAnswer = (e) => {
    let target = e.target;
    target.className = 'answer marked';
    markCorrect(target);
    setTimeout(() => {});
  };

  const markCorrect = (target) => {
    setTimeout(() => {
      if (target.id === randomCharacter.house) {
        target.className = 'answer correct';
        increaseScore();
      } else {
        document.getElementById(randomCharacter.house).className =
          'answer correct';
        target.className = 'answer wrong';
        decreaseLives();
      }
    }, 3000);
  };

  const decreaseLives = () => {
    setTimeout(() => {
      setLives(lives - 1);
    }, 2000);
  };

  const increaseScore = () => {
    setTimeout(() => {
      setScore(score + 1);
    }, 2000);
  };

  const reset = () => {
    let answers = document.getElementsByClassName('answer');
    for (let element of answers) {
      element.className = 'answer';
    }
  };

  return (
    <div className="grid-container">
      <h1>HouseQuiz</h1>
      <div>
        <p>Guess which house the character is in!</p>
        <p>Lives : {lives}</p>
        <p>Score : {score}</p>
      </div>
      <div className='question'>
        {randomCharacter ? <div>{randomCharacter.name}</div> : <div></div>}
      </div>
      <div className='answers'>
        <div className='answer' onClick={markAnswer} id='Gryffindor'>
          Gryffindor
        </div>
        <div className='answer' onClick={markAnswer} id='Hufflepuff'>
          Hufflepuff
        </div>
        <div className='answer' onClick={markAnswer} id='Slytherin'>
          Slytherin
        </div>
        <div className='answer' onClick={markAnswer} id='Ravenclaw'>
          Ravenclaw
        </div>
      </div>
    </div>
  );
};
export default Quiz;
