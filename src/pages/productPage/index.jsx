import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PlaceholderImg from "../../img/placeholder-img.webp";
import { ProductRatingText, ProductRating, ProductReviewTop, ProductItemReviewContainer, ProductItemPrice, ProductItemRating, ProductItemDescription, ProductItemSaved, ProductItemText, ProductReview, ProductPageContainer, ProductItemContent } from "./index.styles";
import { useFetch } from "../../hooks/useFetch";
import Loader from "../../components/loader";
import ErrorMessage from "../../components/error";
import BackBtn from "../../components/buttons/backBtn";
import AddCart from "../../components/buttons/addToCart";
import { Helmet  } from "react-helmet";



function ProductPage() {
    const [productData, setProductData] = useState();

    //API handling
    const { id } = useParams();
    const { data, isLoading, isError } = useFetch(`https://v2.api.noroff.dev/online-shop/${id}`, true);

    useEffect(() => {
        if (data) {
            setProductData(data);
        }
    }, [data]);

    if (isError || !productData) {
        return <div className="lds-loader-container"><ErrorMessage/></div>;
    }

    if (isLoading) {
        return <div className="lds-loader-container"><Loader/></div>;
    }

    const rating = productData.rating;
    const ratingCircles = Array.from({ length: 5 }, (_, index) => (
        <span key={index} className={`rateCircle ${index < rating ? 'rateChecked' : ''}`}></span>
    ));

    //price handling
    let price = productData.price;
    let discount = productData.discountedPrice;
    let saved = (price - discount).toFixed(0);

    //review handling
    let reviews = productData.reviews.map((review) => (
        <ProductReview key={review.id}>
            <ProductReviewTop>
                <h5>{review.username}</h5>
                <ProductRating>{ratingCircles}</ProductRating>
            </ProductReviewTop>
            <ProductRatingText>
                <p>{review.description}</p>
            </ProductRatingText>
        </ProductReview>
    ));

    if (reviews.length === 0) {
        reviews = <p>No reviews yet</p>;   
    }

    return (
        <ProductPageContainer>

            <Helmet>
                <title>{productData.title} | Trendz</title>
            </Helmet>

            <BackBtn />
            <ProductItemContent>
                <img src={productData.image.url || PlaceholderImg} alt={ productData.title } />
                <ProductItemText>
                    {saved > 0 && <ProductItemSaved>SAVE { saved },-</ProductItemSaved>}
                    <ProductItemDescription>
                        <h2>{ productData.title }</h2>
                        <p>{ productData.description }</p>
                    </ProductItemDescription>
                    <ProductItemRating>
                        {ratingCircles}
                        <p>{productData.rating}/5</p>
                    </ProductItemRating>
                    <ProductItemPrice>
                        <b>{ discount }</b>
                         {price !== discount && <p>{price},-</p>}
                    </ProductItemPrice>
                    <>
                        <AddCart />
                    </>
                </ProductItemText>
            </ProductItemContent>
         <ProductItemReviewContainer>
             <h3>Reviews</h3>
             {reviews}
         </ProductItemReviewContainer>
        </ProductPageContainer>
    );
}

export default ProductPage;
