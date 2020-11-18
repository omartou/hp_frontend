import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const StyledNavbar = styled.div`
  position: absolute;
  z-index: 999;
  width: 100%;
  background: linear-gradient(
    to bottom,
    rgba(144, 60, 1),
    rgba(215, 122, 0, 0) 100%
  );
  opacity: 50%;
  transition: 5000ms;
  :hover {
    opacity: 100%;
    font-style: white;
    transition: 1000ms;
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  :hover {
    color: white;
  }
`;
const StyleDiv = styled.div`
  display: inline-block;
  padding: 5px;
  font-size: 1.5vw;
  vertical-align: middle;
  height: 120px;
`;

export default function Navbar({ title }) {
  return (
    <StyledNavbar>
      <div style={{ width: "100%", textAlign: "center", display: "flex" }}>
        <StyleDiv
          style={{
            float: "left",
            textAlign: "Left",
            verticalAlign: "middle",
            width: "40vw",
          }}
        >
          {title}
        </StyleDiv>
        <StyleDiv
          style={{
            float: "center",
            width: "20vw",
            verticalAlign: "text-top",
            opacity: "100%",
          }}
        >
          <Logo />
        </StyleDiv>
        <StyleDiv style={{ float: "right", textAlign: "right", width: "40vw" }}>
          <StyledLink to="/login">Login</StyledLink>
          <br />
          <StyledLink to="/registration">Registration</StyledLink>
          <br />
          <StyledLink to="/hogwarts">Hogwarts</StyledLink>
          <br />
          <StyledLink to="/other">Other Characters</StyledLink>
          <br />
          <StyledLink to="/ministry">Ministry of Magic</StyledLink>
          <br />
          <StyledLink to="/quiz">House Quiz</StyledLink>
          <br />
        </StyleDiv>
      </div>
    </StyledNavbar>
  );
}
