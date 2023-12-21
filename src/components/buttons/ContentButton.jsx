import "./ContentButton.scss";

const ContentButton = ({buttonText, pathTarget, download}) =>{
    const defaultPathData = {
        href: "#",
    };
    
    const pathData = {
        ...defaultPathData,
        href: pathTarget !== undefined ? pathTarget : defaultPathData.href,
    };
    

    return(
        <a href={pathData.href} className="content-button">
            {buttonText}
        </a>
    );
}

export default ContentButton;