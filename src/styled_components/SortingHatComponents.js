import styled from 'styled-components';

const Banner = styled("div")`
    height : 100%;
    width : 20%;
    /*background-image*/
    background-color : beige;
    display: inline-block;
`;


const ChangableBanner = styled("div")`
    height : 100%;
    width : 100%;
    transition: 2000ms;
    opacity: 0%;
`;


const Hat = styled("div")`
    height : 100%;
    width: 60%;
    background-color: burlywood;
    display: inline-block;
`;

const SortingHatContainer = styled("div")`
    height : 70vh;
    width: 100vw;
    background-color: black;
`;

const SortingHatInfo = styled("div")`
    height : 30%;
    width : inherit;
    position: absolute;
    bottom : 0px;
    border: 1px solid pink;
    font-size: 600%;
    transition: 1000ms;
    opacity: 0%;
`;


export {Banner, Hat, SortingHatContainer, SortingHatInfo, ChangableBanner};