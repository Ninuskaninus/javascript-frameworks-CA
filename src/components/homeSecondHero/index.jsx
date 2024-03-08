import React from "react";
import PlaceholderImg from "../../img/placeholder-img.webp";
import { Link } from "react-router-dom";
import ErrorMessage from "../error";
import Loader from "../loader";
import ReadMoreHero from "../buttons/readmoreHero";
import {HeroSecondTextContainer, HeroSecondContainer,HeroBtnContainer} from "./index.styles";

function HomeSecondHero({ data, isLoading, isError }) {
    const { imageUrl, title, description } = data || {}; 
    const item = data;
    if (!item) {
        return isError ? null : <div className="lds-loader-container"><ErrorMessage/></div>;
    } if (isLoading) {
        return <div className="lds-loader-container"><Loader/></div>;
    } else {
            return (
        <Link to={`product/${data.id}`}>
            <HeroSecondContainer>
                <HeroSecondTextContainer>
                <h1>{ title}</h1>
                <p>{description }</p>
                </HeroSecondTextContainer>
                <img src={imageUrl || PlaceholderImg} alt="" />
                <HeroBtnContainer>
                        <ReadMoreHero />
                </HeroBtnContainer>
            </HeroSecondContainer>
        </Link>
        
    );
    }
}

export default HomeSecondHero;