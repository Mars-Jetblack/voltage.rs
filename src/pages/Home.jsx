import { useState, useEffect } from "react";

import Facade from "../components/containers/Facade";
import Footer from "../components/containers/Footer";
import { WhiteSpace, LineSeparator, Image, Grid, GridItem } from "../components/supports";
import ImageButton from "../components/buttons/ImageButton";
import ContentButton from "../components/buttons/ContentButton";

const Home = () =>{
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
    
    const darkFilter = `brightness(${1 - darkness})`;
    const galleryImageSize = 150;
    return(
        <div id="main_wrapper">
            <header>
                <h1></h1>
                <nav>
                </nav>
            </header>

            <div id="main_container">
                <Facade bmg="/images/main-background.png" size="540px" darkFilter={darkFilter}>
                    <WhiteSpace height="200"/>
                    <Image src="/images/voltage-logo.png" width="200"/>
                    
                    <WhiteSpace height="100"/>
                    <WhiteSpace height="50"/>
                </Facade>
                <aside>
                    <nav>
                    </nav>
                </aside>
               
                <div id="contents">
                    <section>
                        <article className="article-center">
                            <h1>Welcome to Voltage.Resolutions</h1>
                            <p>Direct hoster for the most radical Burnin' Rubber mods</p>
                            
                            <WhiteSpace height="100"/>
                            <h1>Getting started ▼</h1>
                            <br/>
                            <div>Were you or are you a Burnin' Rubber player?</div>
                            <br/>
                            <div>Are you looking for something new to play?</div>
                            <br/>
                            <div>Is official content not enough for you?</div>
                            <br/>
                            <br/>
                            <div>You are covered</div>
                            <br/>
                        </article>


                        <article className="article-center">
                                <div className="gallery">
                                  
                                    <WhiteSpace height="50"/>
                                    <div className="showroom-title">Showroom</div>
                                    <WhiteSpace height="10"/>
                                    <LineSeparator width="500"/>
                                    <WhiteSpace height="5"/>
                                    <Grid templateColumns={"repeat(3,1fr)"}>
                                        <GridItem><ImageButton pathTarget="/nitrostream" imgSrc="/images/nitrostream.png" imgHeight={galleryImageSize}/></GridItem>
                                        <GridItem><ImageButton pathTarget="/sabotage" imgSrc="/images/sabotage.png" imgHeight={galleryImageSize}/></GridItem>
                                        <GridItem><ImageButton pathTarget="/sideattack" imgSrc="/images/sideattack.png" imgHeight={galleryImageSize}/></GridItem>
                                        <GridItem><ImageButton pathTarget="/3a" imgSrc="/images/3a.png" imgHeight={galleryImageSize}/></GridItem>
                                        <GridItem><ImageButton pathTarget="/5a" imgSrc="/images/5a.png" imgHeight={galleryImageSize}/></GridItem>
                                        <GridItem><ImageButton pathTarget="/nitrostream3" imgSrc="/images/nitrostream3.png" imgHeight={galleryImageSize}/></GridItem>
                                    </Grid>
                                    <WhiteSpace height="50"/>
                                    <LineSeparator width="500"/>
                                    <WhiteSpace height="50"/>
                                </div>
                           
                        </article>
                    </section>

                    <section> 
                        <article>
                        </article>
                    </section>
                   
                    <WhiteSpace height="175"/>
                    <footer>
                        <Footer />
                    </footer>

                </div>
                
            </div>
        </div>
    );
}

export default Home;