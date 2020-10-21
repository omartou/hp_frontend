import React from "react";
import { Link } from "react-router-dom";

import logo from "../images/harry-potter-logo.png";

const Logo = (props) => {
  return (
    <div>
      <Link to="/">
        <img 
            src={logo} 
            width="100%"
            height="auto"
            alt="HARRY POTTER"/>
      </Link>
    </div>
  );
};

export default Logo;