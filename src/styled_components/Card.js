import styled from 'styled-components';
import { Link } from "react-router-dom";

const Card = styled(Link)`
  text-decoration: none;
  width: 200px;
  height: 200px;
  background: #bebf89;
  /* display: inline-block; */
  color: #292929;
  /* border: 10px solid white; */
  box-shadow: #2f2419 10px 10px 5px;
  border-radius: 12px;
  padding: 50px 0px;
  margin: 20px;
  text-align: center;

  &:hover {
    background: #bfa58a;
    /* border: 10px solid #292929; */
    color: white;
  }
`

export default Card;