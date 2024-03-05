import React from 'react';
import '../../sass/main.scss';
import logoImg from '../../img/trendz-logo-green.png';
import navContactIcon from '../../img/contact_support.png';
import CartIconNav from '../cartIconNav/index.jsx';
import { Link } from 'react-router-dom';
import {NavLinks, HeaderContainer, Nav, NavContainer} from './index.styles.jsx';


function Header() {
    return (

            <HeaderContainer>
            <Nav>
            <NavContainer>
                <Link to="/"><img src={logoImg} alt='Trendz Logo' /></Link>
                <NavLinks>
                    <Link to="/cart"><CartIconNav /></Link>
                    <Link to="/contact"><img src={navContactIcon} alt='Contact'></img></Link>
                </NavLinks>
            </NavContainer>
        </Nav>
 </HeaderContainer>
    
    )

}
export default Header;