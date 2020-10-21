import React from 'react'
import styled from 'styled-components';
import Logo from './Logo';
import { Link } from "react-router-dom";


export default function Navbar( {title} ) {
    const Navbar = styled.div`
    position: absolute;
    z-index: 999;
    width: 100%;

    `
    const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;

    `
    const StyleDiv = styled.div`
    display: inline-block;
    padding: 5px;
    font-size: 2vw;
    vertical-align: middle;
    height: 150px;
    `

    return (
        <Navbar >
        <div style={{ width:"100%", textAlign: "center", display: "flex"}}>
            <StyleDiv style={{float: "left", textAlign: "Left", width: "35vw"}}>
                {title}
            </StyleDiv>
            <StyleDiv style={{float: "center", width: "30vw"}}>
                <Logo />
            </StyleDiv>
            <StyleDiv style={{float: "right", textAlign: "right", width: "35vw"}}>
                <StyledLink to="/hogwarts">Hogwarts</StyledLink><br/>
                <StyledLink to="/other">Other Characters</StyledLink><br/>
                <StyledLink to="/ministry">Ministry of Magic</StyledLink><br/>
             </StyleDiv>
        </div>
        </Navbar>)
}
