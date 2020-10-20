import React from 'react'
import "./HomePage.css";
import {
    Link
} from "react-router-dom";
import hogwarts from '../images/castle.png';
import ministry from '../images/ministry.png';


export default function HomePage() {
    return (
        <div className="homePageContainer">
            <Link to="/hogwarts" className="hogwarts" style={{backgroundImage: `url(${hogwarts})`}}></Link>
            <Link to="/ministry" className="ministry" style={{backgroundImage: `url(${ministry})`}}></Link>
        </div>
    )
}
