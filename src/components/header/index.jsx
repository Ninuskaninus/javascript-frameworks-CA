import React from 'react';
import '../../sass/main.scss';
import logoImg from '../../img/trendz-logo-green.png';
import navContactIcon from '../../img/contact_support.png';
import searcIcon from '../../img/search.png';
import CartIconNav from '../cartIconNav/index.jsx';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <>
            <div className='trendz-header-container'>
            <nav className='trendz-header'>
            <div className='trendz-header-content'>
                <Link to="/"><img src={logoImg} alt='Trendz Logo' /></Link>
                <div className='trendz-header-content-right'>
                    <form className='trendz-nav-search'>
                        <input type='text' placeholder='Search' />
                        <button type='submit'>
                            <img src={searcIcon} alt='Search'></img>
                        </button>
                    </form>
                    <Link to="/cart"><CartIconNav /></Link>
                    <Link to="/contact"><img src={navContactIcon} alt='Contact'></img></Link>
                </div>
            </div>
        </nav>
 </div></>
    
    )

}
export default Header;