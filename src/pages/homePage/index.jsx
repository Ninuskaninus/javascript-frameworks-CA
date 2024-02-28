import React from "react";
import HomeHero from "../../components/homeHero";
import HomeSecondHero from "../../components/homeSecondHero";
import SearchContainer from "../../components/searchContainer";
import Loader from "../../components/loader";
import ProductCard from "../../components/productCard";
import { useFetch } from "../../hooks/useFetch";
import ErrorMessage from "../../components/error";

function HomePage() {
    const { data, isLoading, isError } = useFetch("https://v2.api.noroff.dev/online-shop");
    console.log(data);
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
        <div className="home-page-container">
            <div className="home-hero-container">
                {heroContent1}
            </div>
            <div className="home-second-hero-container">
               {heroContent2}
            </div>
            <SearchContainer />
        <div className="product-card-container">
            {content}
        </div>
        </div>
    );
}

export default HomePage;
