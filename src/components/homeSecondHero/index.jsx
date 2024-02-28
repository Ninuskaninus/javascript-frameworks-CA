import React from "react";
import PlaceholderImg from "../../img/placeholder-img.webp";
import { Link } from "react-router-dom";
import ErrorMessage from "../error";
import Loader from "../loader";

function HomeSecondHero({ data, isLoading, isError }) {
    const { imageUrl, title, description } = data || {}; 
    const item = data;
    if (!item) {
        return isError ? null : <div className="lds-loader-container"><ErrorMessage/></div>;
    } if (isLoading) {
        return <div className="lds-loader-container"><Loader/></div>;
    } else {
            return (
        
            <div className="home-second-hero">
                <div className="hero-text-content">
                <h1>{ title}</h1>
                <p>{description }</p>
                </div>
                <img src={imageUrl || PlaceholderImg} alt="" />
                <div className="hero-btn-container">
                    <Link to="*"><button className="main-btn">Read more</button></Link>
                </div>
            </div>
        
    );
    }
}

export default HomeSecondHero;