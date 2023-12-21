const LineSeparator = ({width, height, color}) =>{
    /*define default values in case props aren't defined*/
    const defaultStyle = {
        backgroundColor: "white",
        width: "100%",
        height: "2px",
    };
    
    /*evaluate if props were given off, if they were then default values are overriden with props*/
    const divStyle = {
        ...defaultStyle,
        backgroundColor: color !== undefined ? color : defaultStyle.backgroundColor, /*!== strict inequality, takes also in account the type of variable*/
        width: width !== undefined ? `${width}px` : defaultStyle.width,
        height: height !== undefined ? `${height}px` : defaultStyle.height,
    };

    const containerStyle = {
        display: "flex",
        justifyContent: "center",
      };
    

    return (
        <div style={containerStyle}>
            <div style={divStyle}></div>
        </div>
    );
}

export default LineSeparator;