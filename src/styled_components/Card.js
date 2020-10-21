import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Card = styled(Link)`
  text-decoration: none;
  width: 250px;
  height: 200px;
  background: #bebf89;
  color: #292929;
  box-shadow: #2f2419 10px 10px 5px;
  border-radius: 12px;
  padding: 50px 0px;
  margin: 20px;
  text-align: center;

  &:hover {
    background: #bfa58a;
    color: white;
  }
`;

export default Card;
