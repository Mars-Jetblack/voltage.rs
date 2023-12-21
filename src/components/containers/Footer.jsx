import "./Footer.scss";
import { Image, WhiteSpace } from "../supports";
import ContentButton from "../buttons/ContentButton";

const Footer = () =>{
    return(
        <div id="footer"> 
        <br/>
        <Image src="/images/contact-logo.png" height="50"/>
        
       
        <h2>Contact</h2>
        For technical issues only
        <WhiteSpace height="50"/>
        <Image src="/images/marsjetblack-logo.png" height="50"/>
        <h4>Mars#4856</h4> 

        <WhiteSpace height="50"/>
        <br/>
        <ContentButton buttonText={"♡ Donate"} pathTarget={"/donate"}/>

        <WhiteSpace height="50"/>
            <div className="footer-text">// © Voltage.Resolutions // Mars Jetblack 2023</div>
            
            <WhiteSpace height="10"/>
            <disclaimer> Games use Burnin' Rubber series by XformGames as their base. Additional distribution outside of Voltage.res may be done by LegacyShockwave.</disclaimer>

        </div>
        
    );
};

export default Footer;