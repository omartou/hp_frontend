import React from 'react'
import hpHouseMain from '../images/hpHousesMain.png';
import "./HouseSelection.css";
import hpHouseGryffindor from '../images/hpHousesGryffindor.png';
import hpHouseSlytherin from '../images/hpHousesSlytherin.png';
import hpHouseHufflepuff from '../images/hpHousesHufflepuff.png';
import hpHouseRavenclaw from '../images/hpHousesRavenclaw.png';

export default function HouseSelection() {


    function backgroundStyle(img) {
        return ( {
            backgroundImage:`url(${img})`,
            backgroundSize: "cover",
            position: "absolute",
            top: "0",
            bottom: "0",
            right: "0",
            left: "0"
        })
    }

    function changeBackgroundToNormal(e) {
        e.target.parentNode.style.backgroundImage = `url(${hpHouseMain})`;
    }

    function changeBackgroundToGryffindor(e) {
        e.target.parentNode.style.backgroundImage = `url(${hpHouseGryffindor})`;
    }

    function changeBackgroundToSlytherin(e) {
        e.target.parentNode.style.backgroundImage = `url(${hpHouseSlytherin})`;
    }

    function changeBackgroundToHufflepuff(e) {
        e.target.parentNode.style.backgroundImage = `url(${hpHouseHufflepuff})`;
    }

    function changeBackgroundToRavenclaw(e) {
        e.target.parentNode.style.backgroundImage = `url(${hpHouseRavenclaw})`;
    }

    return (
        <div className="houseBackground" style={{backgroundImage:`url(${hpHouseMain})`}}>
            <div className="houseDiv" onMouseOver={changeBackgroundToGryffindor} onMouseLeave={changeBackgroundToNormal}></div>
            <div className="houseDiv" onMouseOver={changeBackgroundToSlytherin} onMouseLeave={changeBackgroundToNormal}></div>
            <div className="houseDiv" onMouseOver={changeBackgroundToHufflepuff} onMouseLeave={changeBackgroundToNormal}></div>
            <div className="houseDiv" onMouseOver={changeBackgroundToRavenclaw} onMouseLeave={changeBackgroundToNormal}></div>
        </div>
    )
}
