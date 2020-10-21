import React from 'react'
import {
    Link
} from 'react-router-dom';
import HousesSelection from './HouseSelection';
import "./HogwartsPage.css";
import highTable from '../images/highTableBorder.png';
import brickWall from '../images/brickwall.png';


export default function HogwartsPage() {
    return (
        <div className="HogwartsBackground" style={{backgroundImage:`url(${brickWall})`}}>
            <div className="houseSelectionDiv">
                <HousesSelection/>
            </div>
            <Link to="/employees" className="employees" style={{backgroundImage:`url(${highTable})`}}></Link>
            <div className="housesTitle">Houses</div>
            <div className="staffTitle">Employees</div>
        </div>
    )
}
