import React, { useEffect, useState } from 'react';
import "../../styles/shared.scss";
import Facade from "./Facade";
import ContentButton from "../buttons/ContentButton";
import { WhiteSpace } from "../supports";
import Footer from "./Footer";
import { Link } from 'react-router-dom';


function generateEndOfSupportText(endOfSupportDate){
  const currentDate = new Date();

  console.log("Today's date is " + currentDate);
  console.log("End of support date is " + endOfSupportDate);
  

  const currentDateObject = new Date(currentDate);
  const endOfSupportDateObject = new Date(endOfSupportDate);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = endOfSupportDateObject.toLocaleDateString('en-US', options);
  
  let endOfSupportText = " ";
  
  if (endOfSupportDate != null){
    endOfSupportText = "✕ Technical support ends on " + formattedDate;
    
    if (currentDateObject > endOfSupportDateObject) {
      endOfSupportText = "✕ Game is available, but technical support has ended on " + formattedDate;
      console.log("End of support has been reached");
    } 
    else {
      console.log("Support is still ongoing");
    }
  }
  return endOfSupportText;
}

const GamepageTemplate = ({
  backgroundPng,
  gameTitle,
  gameDescription,
  embedYouTubeId,
  downloadPath,
  gameVersion,
  versionDate,
  endOfSupportDate
}) => {
  const backgroundPath = "/images/" + backgroundPng + ".png";
  const embedYouTubePath = "https://www.youtube.com/embed/" + embedYouTubeId;
  const versionDateText = "(" + versionDate + ")";
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Run this effect only once when the component mounts

  const maxScroll = 1000; // Adjust this value to control the darkness intensity
  const darkness = Math.min(scrollPosition / maxScroll, 1);

  const endOfSupportText = generateEndOfSupportText(endOfSupportDate);

  // Calculate the darkness intensity and set the filter property
  const darkFilter = `brightness(${1 - darkness})`;
  return (
    <div id="main_wrapper">
      <header>
        <h1></h1>
        <nav></nav>
      </header>

      <div id="main_container">
        <Facade bmg={backgroundPath} size="700px"  darkFilter={darkFilter}>
          <div className="transparent-background">
            <WhiteSpace height="75" />
            <h1>{gameTitle}</h1>
            <div>{gameDescription}</div>
            <WhiteSpace height="20" />
            <iframe
              width="560"
              height="315"
              src={embedYouTubePath}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <WhiteSpace height="20" />
            <ver>
            ⚙ {gameVersion} {versionDateText}
          </ver>
          <ver>⚠ Please check if your game version is up to date</ver>
          <br/>
          <Link to={"/endofsupport"}><eosl>{endOfSupportText}</eosl></Link>
          
          <WhiteSpace height="10" />
          </div>
          <WhiteSpace height="30" />
          
          <div className="article-center">
            <ContentButton pathTarget={downloadPath} buttonText={"Get now"} />

          </div>
          
          <WhiteSpace height="30" />

        </Facade>

        <div id="contents">
          <section>
            <article></article>
          </section>
        </div>
      </div>
      <WhiteSpace height="40" />

      <WhiteSpace height="5" />
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default GamepageTemplate;