import "./NavBar.scss";
import "./DropdownMenu.scss";
import { Link } from "react-router-dom";
import React from "react";

const ASeriesMenu = ({ onClose, overrideMarginLeft }) => {
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
       <Link to="/3a">
        <p className="dropdown-button" onClick={handleItemClick}>
       
          Burnin' Rubber 3A
         
        </p>
        </Link>
      <Link to="/5a">
        <p className="dropdown-button" onClick={handleItemClick}>
          Burnin' Rubber 5A
        </p>
      </Link>
    </div>
  );
};

export default ASeriesMenu;