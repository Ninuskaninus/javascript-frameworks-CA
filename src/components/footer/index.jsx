import React from "react";
import BlackLogo from "../../img/trendz-logo-black.png";
import ContactIconBlack from "../../img/contact_support_black.png";
import CopyRight from "../../img/copyright.png";
import { Link } from "react-router-dom";


function Footer() {
    return (
        <footer>
            <div className="footer-container">
              <Link to="/"><img src={BlackLogo} alt="Trendz logo" /></Link>  
                <Link to="contact"><div className="footer-link">
                    <img src={ContactIconBlack} alt="Contact" />
                    <h4>Want to get in touch?</h4>
                </div></Link>
                <div className="footer-copyright">
                    <img src={CopyRight} alt="Copyright" />
                    <p>Nina Amdal</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;