import React from "react";
import HomeHero from "../../components/homeHero";
import HomeSecondHero from "../../components/homeSecondHero";
import SearchBar from "../../components/searchBar";
import Loader from "../../components/loader";
import ProductCard from "../../components/productCard";
import { useFetch } from "../../hooks/useFetch";
import ErrorMessage from "../../components/error";
import {ProductCardContainer, HeroContainer, HomeContainer, HeroSecondContainer } from"./index.styles.jsx";



function HomePage() {
    const { data, isLoading, isError } = useFetch("https://v2.api.noroff.dev/online-shop");
    let content;
    if (isError) {
        content = <div className="lds-loader-container"><ErrorMessage/></div>;
    } else if (isLoading) {
        content = <div className="lds-loader-container"><Loader/></div>;
    } else {
        content = data.map((product) => {
            return <ProductCard data={product} key={product.id} />;
        });
    }

    let heroContent1;
    let heroContent2;
    if (isError) {
        heroContent1 = <div className="lds-loader-container"><ErrorMessage/></div>;
        heroContent2 = <div className="lds-loader-container"><ErrorMessage/></div>;
    } else if (isLoading) {
        heroContent1 = <div className="lds-loader-container"><Loader/></div>;
        heroContent2 = <div className="lds-loader-container"><Loader/></div>;
    } else {
        heroContent1 = <HomeHero data={data[0]} />;
        heroContent2 = <HomeSecondHero data={data[1]} />;
    }

    return (
        <HomeContainer>
            <HeroContainer>
                {heroContent1}
            </HeroContainer>
            <HeroSecondContainer>
               {heroContent2}
            </HeroSecondContainer>
            <SearchBar />
        <ProductCardContainer>
            {content}
        </ProductCardContainer>
        </HomeContainer>
    );
}

export default HomePage;
