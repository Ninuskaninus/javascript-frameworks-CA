import React from "react";
import BlackLogo from "../../img/trendz-logo-black.png";
import ContactIconBlack from "../../img/contact_support_black.png";
import CopyRight from "../../img/copyright.png";
import { Link } from "react-router-dom";
import {FooterContainer, FooterLink} from "./index.styles";


function Footer() {
    return (
        <footer>
            <FooterContainer>
              <Link to="/"><img src={BlackLogo} alt="Trendz logo" /></Link>  
                <Link to="contact"><FooterLink>
                    <img src={ContactIconBlack} alt="Contact" />
                    <h4>Want to get in touch?</h4>
                </FooterLink></Link>
                <FooterLink>
                    <img src={CopyRight} alt="Copyright" />
                    <p>Nina Amdal</p>
                </FooterLink>
            </FooterContainer>
        </footer>
    );
}

export default Footer;