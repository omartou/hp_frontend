import React from 'react';
import './HomePage.css';
import Logo from './Logo';
import {
  MinistryImage,
  HogwartsImage,
  HomePageContainer,
} from '../styled_components/index';

export default function HomePage() {
  return (
    <HomePageContainer>
      <Logo />
      <HogwartsImage to='/hogwarts'></HogwartsImage>
      <MinistryImage to='/ministry'></MinistryImage>
    </HomePageContainer>
  );
}
