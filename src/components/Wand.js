import React, { useEffect } from 'react';
import './HomePage.css';
import harry from '../images/harry2.png';
import voldemort from '../images/voldemort2.png';
import hermione from '../images/hermione2.png';
import draco from '../images/draco2.png';

import { HPWand } from '../styled_components/index';
import {
  WandContainer,
  WandContainerMid,
  WandContainerLeft,
  WandContainerRight,
} from '../styled_components/WandContainers';

const jumpWand = (e) => {
  console.log(e.target.parentNode);
  const left = document.querySelector('.wandleft');
  const mid = document.querySelector('.wandmid');
  const right = document.querySelector('.wandright');
  if (e.target.parentNode === mid) {
    right.appendChild(e.target);
  } else if (e.target.parentNode === right) {
    left.appendChild(e.target);
  } else {
    mid.appendChild(e.target);
  }
};

export default function Wand(props) {
  useEffect(() => {
    props.setTitle('Wands');
  }, [props]);

  return (
    <WandContainer>
      <WandContainerLeft className='wandleft'></WandContainerLeft>
      <WandContainerMid className='wandmid'>
        <HPWand onClick={jumpWand} src={harry} draggable={false} />
        <HPWand onClick={jumpWand} src={hermione} draggable={false} />
        <HPWand onClick={jumpWand} src={voldemort} draggable={false} />
        <HPWand onClick={jumpWand} src={draco} draggable={false} />
      </WandContainerMid>
      <WandContainerRight className='wandright'></WandContainerRight>
    </WandContainer>
  );
}
