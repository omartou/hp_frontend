import React, {useEffect} from 'react';
import './HomePage.css';
import {
  MinistryImage,
  HogwartsImage,
  HomePageContainer,
  OtherImage
} from '../styled_components/index';

export default function HomePage(props) {
  useEffect(() => {
    props.setTitle("Home");
  }, [])


  return (
    <HomePageContainer>
      <HogwartsImage to='/hogwarts'></HogwartsImage>
      <MinistryImage to='/ministry'></MinistryImage>
      <OtherImage to="/other"></OtherImage>
    </HomePageContainer>
  );
}
