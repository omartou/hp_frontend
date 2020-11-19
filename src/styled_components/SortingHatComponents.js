import styled from 'styled-components';
import HogwartsBanner from "../images/HogwartsBanner.png";
import SortingHat from "../images/SortingHat.png";
import SortingHatOnHover from "../images/SortingHatOnHover.png";

const Banner = styled("div")`
    height : 100%;
    width : 20%;
    background-image : url(${HogwartsBanner});
    display: inline-block;
    background-repeat: no-repeat;
    background-position-x: center;
    background-size: contain;
`;


const ChangableBanner = styled("div")`
    height : 100%;
    width : 100%;
    transition: 3000ms;
    opacity: 0%;
    background-repeat: no-repeat;
    background-position-x: center;
    background-size: contain;
`;


const Hat = styled("div")`
    height : 100%;
    width: 60%;
    background-image : url(${SortingHat});
    display: inline-block;
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: top;
    background-size: 60%;
    transition: 100ms;
    &:hover {
        background-image : url(${SortingHatOnHover});
        transition: 100ms;
    }
`;

const SortingHatContainer = styled("div")`
    height : 70vh;
    width: 100vw;
`;

const SortingHatInfo = styled("div")`
    font-family: Georgia, 'Times New Roman', Times, serif;
    color: goldenrod;
    -webkit-text-stroke: 3px black;
    height : 20%;
    width : inherit;
    position: absolute;
    bottom : 0px;
    font-size: 600%;
    transition: 1000ms;
    opacity: 0%;
`;


export {Banner, Hat, SortingHatContainer, SortingHatInfo, ChangableBanner};