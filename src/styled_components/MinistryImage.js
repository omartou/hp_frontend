import styled from 'styled-components';
import { Link } from "react-router-dom";
import ministry from '../images/ministry.png';

const MinistryImage = styled(Link)`
  background-image: url(${ministry});
  position: absolute;
  left: 55vw;
  top: 42vh;
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

export default MinistryImage;