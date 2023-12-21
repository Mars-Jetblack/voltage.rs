import React from 'react';


const Grid = ({children, templateColumns, newGap, sideMargins})=>{
  
    const defaultStyle = {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px",
        marginRight: "0px",
        marginLeft: "0px",
    };

    const divStyle = {
        ...defaultStyle,
     
        gridTemplateColumns: templateColumns !== undefined ? templateColumns : defaultStyle.gridTemplateColumns,
        gap: newGap !== undefined ? newGap : defaultStyle.gap,
        marginRight: sideMargins !== undefined ? sideMargins : defaultStyle.marginRight,
        marginLeft: sideMargins !== undefined ? sideMargins : defaultStyle.marginLeft,
    };
    
   
    return(
        <div style={divStyle} className="grid-container">
            {children}
        </div>
    );
    
}

const GridItem = ({children}) =>{
    return(
        <div className="grid-item">{children}</div>
    );
}

export {Grid, GridItem};