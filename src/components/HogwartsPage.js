import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import HousesSelection from "./HouseSelection";
import "./HogwartsPage.css";

export default function HogwartsPage(props) {
  useEffect(() => {
    props.setTitle("Hogwarts");
  }, [props]);

  return (
    <div className="HogwartsBackground">
      <div className="houseSelectionDiv">
        <HousesSelection />
      </div>
      <Link to="/employees" className="employees"></Link>
      <div className="housesTitle">Houses</div>
      <div className="staffTitle">Employees</div>
    </div>
  );
}
