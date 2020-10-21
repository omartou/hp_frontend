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
    const StyledLi = styled.li`
    display: inline-block;
    padding: 5px;
    font-size: 30px;
    vertical-align: middle;
    height: 150px;
    width: 23%;
    `

    return (
        <Navbar>
        <ul style={{display: "inline", width:"100%"}}>
            <StyledLi style={{float: "left", textAlign: "Left"}}>
                <p>{title}</p>
            </StyledLi>
            <StyledLi style={{float: "center"}}>
                <Logo />
            </StyledLi>
            <StyledLi style={{float: "right", textAlign: "right"}}>
                <StyledLink to="/hogwarts">Hogwarts</StyledLink><br/>
                <StyledLink to="/other">Other Characters</StyledLink><br/>
                <StyledLink to="/ministry">Ministry of Magic</StyledLink><br/>
             </StyledLi>
        </ul>
        </Navbar>
    )
}
