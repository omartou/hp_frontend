import React from 'react';
import { useState, useEffect } from 'react';
import './Quiz.css';
import Content from '../styled_components/Content';
import Datafetcher from "../service/Datafetcher";

const Quiz = (props) => {
  const [randomCharacter, setRandomCharacter] = useState({});
  const dataFetcher = new Datafetcher();
  const [lives, setLives] = useState(3);
  const [score, setScore] = useState(0);


  useEffect(() => {
    dataFetcher.fetch("http://localhost:8080/quiz/house/random", setRandomCharacter);
    if (lives !== 0) {
      reset();
    }
  }, [score, lives]);

  useEffect(() => {
    props.setTitle('House quiz');
  }, [props]);

  const markAnswer = (e) => {
    removeOnClicks();
    let target = e.target;
    target.className = 'answer marked';
    markCorrect(target);
  };

  const markCorrect = (target) => {
    setTimeout(() => {
      if (target.id === randomCharacter.house) {
        target.className = 'answer correct';
        document.getElementById('question').className = 'question correct';
        increaseScore();
      } else {
        document.getElementById(randomCharacter.house).className =
          'answer correct';
        target.className = 'answer wrong';
        document.getElementById('question').className = 'question wrong';
        decreaseLives();
      }
    }, 2000);
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

  const removeOnClicks = () => {
    let answers = document.querySelectorAll('.answer');
    for (let answer of answers) {
      answer.className = 'answer disabled';
    }
  };

  const reset = () => {
    document.getElementById('question').className = 'question';
    let answers = document.getElementsByClassName('answer');
    for (let element of answers) {
      element.className = 'answer';
    }
  };

  if (lives === 0) {
    return (
      <Content className='grid-container'>
        <h1>Game Over</h1>
        <div className='task'>Your score is {score}!</div>
        <div
          className='answer'
          onClick={() => {
            setLives(3);
            setScore(0);
          }}
        >
          Try again
        </div>
      </Content>
    );
  } else {
    return (
      <Content className='grid-container'>
        <div className='question-container'>
          <h1>HouseQuiz</h1>
          <div className='task'>Guess which house the character is in!</div>
          <div className='info'>
            <div className='lives'>Lives : {lives}</div>
            <div className='score'>Score : {score}</div>
          </div>
          <div className='question' id='question'>
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
      </Content>
    );
  }
};
export default Quiz;
