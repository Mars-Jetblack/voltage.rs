import "./NavBar.scss";
import "./DropdownMenu.scss";
import { Image, Grid, WhiteSpace, GridItem } from "../supports";
import { Link } from "react-router-dom";
import React from "react";

const NsMenu = ({ onClose, overrideMarginLeft }) => {
  const handleItemClick = () => {
    // Add any item click logic here

    // Close the menu after an item is clicked
    onClose();
  };

  const topPosition = {
    marginLeft: overrideMarginLeft,
};

  return (
    <div className="dropdown-menu" style={topPosition}>
       <Link to="/nitrostream">
        <p className="dropdown-button" onClick={handleItemClick}>
       
          BR: NitroStream
         
        </p>
        </Link>
      <Link to="/sabotage">
        <p className="dropdown-button" onClick={handleItemClick}>
          NS2: Sabotage
        </p>
      </Link>
      <Link to="/nitrostream3">
        <p className="dropdown-button" onClick={handleItemClick}>
          NS3: Ignition
        </p>
      </Link>
    </div>
  );
};

export default NsMenu;