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
        <a linkTo={pathData.href} className="image-button">
            <img src={imgSrc} width={imgWidth} height={imgHeight} alt=""></img>
        </a>
    );
}

export default ImageButton;