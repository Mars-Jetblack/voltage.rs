const ImageButton = ({imgSrc, imgWidth, imgHeight, pathTarget}) =>{
    const defaultPathData = {
        href: "#",
        borderRadius: "2px"
    };
    
    const pathData = {
        ...defaultPathData,
        href: pathTarget !== undefined ? pathTarget : defaultPathData.href,
    };
    

    return(
        <a href={pathData.href} className="image-button">
            <img src={imgSrc} width={imgWidth} height={imgHeight}></img>
        </a>
    );
}

export default ImageButton;