import React from "react";
import "../Style/Navbar.css";
import { GiEarthAsiaOceania } from "react-icons/gi";

const Navbar = () => {
  return (
    <>
      
      <div className="header">
        <GiEarthAsiaOceania className="Travel-logo" />
        <p>Travel Journal Your Travel Guide</p>
        </div>
      
    </>
  );
};

export default Navbar;
