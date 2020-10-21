import React from 'react'
import styled from 'styled-components';
import Logo from './Logo';


export default function Navbar() {
    const Navbar = styled.div`
    position: absolute;
    z-index: 999;
    `

    return (
        <Navbar><Logo/></Navbar>
    )
}
