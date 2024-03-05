import React from "react";
import PlaceholderImg from "../../img/placeholder-img.webp";
import { Link } from "react-router-dom";
import Loader from "../loader";
import ReadMoreHero from "../buttons/readmoreHero";
import {HeroTopContainer, HeroTopTextContainer} from "./index.styles.jsx";

function HomeHero({ data, isLoading, isError }) {
    const { imageUrl, title, description, id } = data || {}; 
    const item = data;

    if (!item) {
        return isError ? null : <div className="lds-loader-container"><Loader/></div>;
    } if (isLoading) {
        return <div className="lds-loader-container"><Loader/></div>;
    } else {
        return (
            <HeroTopContainer>
                <img src={imageUrl || PlaceholderImg} alt="" />
                <HeroTopTextContainer>
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <Link to={`product/${id}`}>
                        <ReadMoreHero />
                    </Link>
                </HeroTopTextContainer>
            </HeroTopContainer>
        );
    }

}

export default HomeHero;
