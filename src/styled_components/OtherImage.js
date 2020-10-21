import styled from 'styled-components';
import { Link } from "react-router-dom";
import hogwarts from '../images/dursley.png';

const HogwartsImage = styled(Link)`
  background-image: url(${hogwarts});
  position: absolute;
  left: 30vw;
  top: 68vh;
  height: 28vh;
  width: 28vw;
  background-size: 28vw 28vh;
  background-repeat: no-repeat;
  filter: sepia(100%);
  transition: 2000ms;

  &:hover {
    filter: sepia(0%) saturate(170%);
    transition: 2000ms;
  }
`

export default HogwartsImage;