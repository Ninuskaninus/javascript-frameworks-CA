import React from "react";
import PlaceholderImg from "../../img/placeholder-img.webp";
import { Link } from "react-router-dom";
import Loader from "../loader";

function HomeHero({ data, isLoading, isError }) {
    const { imageUrl, title, description, id } = data || {}; 
    const item = data;

    if (!item) {
        return isError ? null : <div className="lds-loader-container"><Loader/></div>;
    } if (isLoading) {
        return <div className="lds-loader-container"><Loader/></div>;
    } else {
        return (
            <div className="home-hero">
                <img src={imageUrl || PlaceholderImg} alt="" />
                <div className="hero-text-content">
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <Link to={`product/${id}`}><button className="main-btn">Read more</button></Link>
                </div>
            </div>
        );
    }

}

export default HomeHero;
