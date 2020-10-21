import React from 'react'
import hpHouseMain from '../images/hpHousesBackgMainv2.png';
import {Link} from 'react-router-dom';
import "./HouseSelection.css";
import hpHouseGryffindor from '../images/hpHousesGryffindorBright.png';
import hpHouseSlytherin from '../images/hpHousesSlytherinBright.png';
import hpHouseHufflepuff from '../images/hpHousesHufflepuffBright.png';
import hpHouseRavenclaw from '../images/hpHousesRavenclawBright.png';

export default function HouseSelection() {


    function changeBackgroundToNormal(e) {
        let backgroundNode = document.querySelector("#background")
        backgroundNode.style.backgroundImage = `url(${hpHouseMain})`;
    }

    function changeBackgroundToGryffindor(e) {
        let backgroundNode = document.querySelector("#background")
        backgroundNode.style.backgroundImage = `url(${hpHouseGryffindor})`;
    }

    function changeBackgroundToSlytherin(e) {
        let backgroundNode = document.querySelector("#background")
        backgroundNode.style.backgroundImage = `url(${hpHouseSlytherin})`;
    }

    function changeBackgroundToHufflepuff(e) {
        let backgroundNode = document.querySelector("#background")
        backgroundNode.style.backgroundImage = `url(${hpHouseHufflepuff})`;
    }

    function changeBackgroundToRavenclaw(e) {
        let backgroundNode = document.querySelector("#background")
        backgroundNode.style.backgroundImage = `url(${hpHouseRavenclaw})`;
    }


    return (
        <div className="houseBackground" style={{backgroundImage:`url(${hpHouseMain})`}}>
            <div id="background" className="houseBackground" style={{backgroundImage:`url(${hpHouseMain})`}}>
                <Link to="/gryffindor" className="houseDiv" onMouseOver={changeBackgroundToGryffindor} onMouseLeave={changeBackgroundToNormal}></Link>
                <Link to="/slytherin" className="houseDiv" onMouseOver={changeBackgroundToSlytherin} onMouseLeave={changeBackgroundToNormal}></Link>
                <Link to="/hufflepuff" className="houseDiv" onMouseOver={changeBackgroundToHufflepuff} onMouseLeave={changeBackgroundToNormal}></Link>
                <Link to="/ravenclaw" className="houseDiv" onMouseOver={changeBackgroundToRavenclaw} onMouseLeave={changeBackgroundToNormal}></Link>
            </div>
        </div>
        
    )
}