import { useState, useEffect } from "react";

import Facade from "../components/containers/Facade";
import Footer from "../components/containers/Footer";
import { WhiteSpace, LineSeparator, Image, Grid, GridItem } from "../components/supports";
import ImageButton from "../components/buttons/ImageButton";
import ContentButton from "../components/buttons/ContentButton";

//EOSL = End Of Support Life
const EOSL = () =>{
    return(
        <div id="main_wrapper">
            <header>
                <h1></h1>
                <nav>
                </nav>
            </header>

            <div id="main_container">
         
            <WhiteSpace height="50"/>

                    
                  
            </div>
            <div id="contents">
                <section>
                    <article className="article-center">
                        <div className="gallery">
                            <div className="giant-title-text">End of Technical Support</div>
                          
                            <WhiteSpace height={"20"}/>
                            <LineSeparator color={"white"} width={"500"}/>
                            <WhiteSpace height={"50"}/>
                           
                            <div className="big-title-text">What does it mean?</div>

                            <article className="article-center">
                                <p className="eosl-clarification">
                                As with most existing things, they have to come to an end.
                                <WhiteSpace height={"40"}/>
                                This is not the exception here, specially with software, as in order to increase general productivity and efficiency
                                certain games are no longer going to be officially supported, which means that efforts to correct bugs and generate new updates will be reduced to practically zero in those cases, although the games themselves can still be downloaded.
                                <WhiteSpace height={"50"}/>
                                Thanks for your understanding, and happy playing.
                                </p>
                            </article>

                            <WhiteSpace height={"100"}/>
                            <LineSeparator color={"white"} width={"500"}/>
                          
                        </div>
                    </article>
                </section>
            </div>
           
            <Footer/>
        </div>
    );
}

export default EOSL;