import React from 'react';
import hpHouseMain from '../images/hpHousesMain.png';
import { Link } from 'react-router-dom';
import './HouseSelection.css';
// import hpHouseGryffindor from '../images/hpHousesGryffindor.png';
// import hpHouseSlytherin from '../images/hpHousesSlytherin.png';
// import hpHouseHufflepuff from '../images/hpHousesHufflepuff.png';
// import hpHouseRavenclaw from '../images/hpHousesRavenclaw.png';

export default function HouseSelection() {
  //   function changeBackgroundToNormal(e) {
  //     let backgroundNode = document.querySelector('.houseBackground');
  //     backgroundNode.style.backgroundImage = `url(${hpHouseMain})`;
  //     // e.target.parentNode.parentNode.style.backgroundImage = `url(${hpHouseMain})`;
  //   }

  //   function changeBackgroundToGryffindor(e) {
  //     let backgroundNode = document.querySelector('.houseBackground');
  //     backgroundNode.style.backgroundImage = `url(${hpHouseGryffindor})`;
  //   }

  //   function changeBackgroundToSlytherin(e) {
  //     let backgroundNode = document.querySelector('.houseBackground');
  //     backgroundNode.style.backgroundImage = `url(${hpHouseSlytherin})`;
  //   }

  //   function changeBackgroundToHufflepuff(e) {
  //     let backgroundNode = document.querySelector('.houseBackground');
  //     backgroundNode.style.backgroundImage = `url(${hpHouseHufflepuff})`;
  //   }

  //   function changeBackgroundToRavenclaw(e) {
  //     let backgroundNode = document.querySelector('.houseBackground');
  //     backgroundNode.style.backgroundImage = `url(${hpHouseRavenclaw})`;
  //   }

  return (
    <div
      className='houseBackground'
      style={{ backgroundImage: `url(${hpHouseMain})` }}
    >
      <Link to='/gryffindor' className='houseDiv'></Link>
      <Link to='/slytherin' className='houseDiv'></Link>
      <Link to='/hufflepuff' className='houseDiv'></Link>
      <Link to='/ravenclaw' className='houseDiv'></Link>
    </div>
  );
}
