import { WhiteSpace, Image } from "../supports";
import { useState, useEffect } from "react";
import "./Facade.scss";

const Facade = ({children, bmg, size, darkFilter})=>{
    const [offset, setOffset] = useState(0);
    const handleScroll = () => {
        setOffset(window.pageYOffset);
      };
   
      useEffect(() => {
      
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
     };
    }, []);

    const divStyle = {
        backgroundImage: "url(" + bmg + ")",
        backgroundSize: "cover",
        height: size,
        backgroundPositionY: `${offset * -0.2}px`,
        filter: darkFilter,
    };

    return(
        <div className="facade" style={divStyle}>
            {children}
        </div>
    );
};

export default Facade;