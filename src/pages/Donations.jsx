import React from "react";
import { WhiteSpace, LineSeparator } from "../components/supports";
import Footer from "../components/containers/Footer";

const Donations = () =>{
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
                            <div className="giant-title-text">Donations</div>
                            <LineSeparator color={"white"} width={"500"}/>
                            <h1>Thanks for your contribution</h1>
                            🤍
                            <WhiteSpace height="40"/>
                            <iframe
                            src="https://nowpayments.io/embeds/donation-widget?api_key=XAG38KD-VT4MF4T-J45VVVW-S2PPK3W"
                            width="354" height="630" frameborder="0"
                            scrolling="no" >
                                Can't load widget
                            </iframe>
                            <WhiteSpace height="50"/>
                            <LineSeparator color={"white"} width={"500"}/>
                        </div>
                    </article>
                </section>
            </div>
           
            <Footer/>
        </div>
   
    );
};

export default Donations;