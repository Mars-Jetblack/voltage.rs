import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { WhiteSpace, Image } from "../supports";
import NsMenu from "./NsMenu";
import ASeriesMenu from "./ASeriesMenu";

const NavBar = () => {
  
  


{/*NitroStream menu */}
const [isNsMenuActive, setNsMenuActive] = useState(false);

  const toggleNsMenu = () => {
    setNsMenuActive(!isNsMenuActive);
    closeASeriesMenu();
  };

  const closeNsMenu = () => {
    setNsMenuActive(false);
  };

  {/*A Series menu */}
  const [isASeriesMenuActive, setASeriesMenuActive] = useState(false);

  const toggleASeriesMenu = () => {
    setASeriesMenuActive(!isASeriesMenuActive);
    closeNsMenu();
  };

  const closeASeriesMenu = () => {
    setASeriesMenuActive(false);
  };

  const scrollToFooter = () => {
    const footerElement = document.getElementById("footer");
  
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  

  useEffect(() => {
    const handleClickOutside = (event) => {
      const navBar = document.getElementById("navigation_bar");
      const dropdownMenu = document.getElementsByClassName("dropdown-menu");
      if (navBar && !navBar.contains(event.target)) {
        closeNsMenu();
        closeASeriesMenu();
      }
     
    };
    
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []); // Empty dependency array to ensure the effect runs only once

  return (
    <div id="navigation_bar">
      <div className="left">
        <Link to="/">
            
          <a className="nav-button">
          <Image height={10} src="/images/voltage-logo.png"></Image>
          </a>
        </Link>

        <Link to="#">
          <a className="nav-button" onClick={toggleNsMenu}>
            NitroStream ▼
          </a>
        </Link>

        <Link to="#">
          <a className="nav-button" onClick={toggleASeriesMenu}>A series ▼</a>
        </Link>
        {isNsMenuActive && <NsMenu onClose={closeNsMenu} overrideMarginLeft={59.5}/>}
        {isASeriesMenuActive && <ASeriesMenu onClose={closeASeriesMenu} overrideMarginLeft={168.5}/>}
      </div>

      <div className="right">
            <Link to="#">
              <a className="nav-button" onClick={scrollToFooter}>
                Contact
              </a>
              </Link>
          <br/>
        <WhiteSpace height="10" />
      </div>

      <WhiteSpace height="10" />
    </div>
  );
};

export default NavBar;