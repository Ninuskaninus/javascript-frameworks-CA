import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PlaceholderImg from "../../img/placeholder-img.webp";
import { ProductReview } from "./index.styles";
import { useFetch } from "../../hooks/useFetch";
import Loader from "../../components/loader";
import ErrorMessage from "../../components/error";
import BackBtn from "../../components/buttons/backBtn";
import AddCart from "../../components/buttons/addToCart";

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
            <div className="product-item-review-top">
                <h5>{review.username}</h5>
                <div className="product-rating no-padding">{ratingCircles}</div>
            </div>
            <div className="product-item-review-body">
                <p>{review.description}</p>
            </div>
        </ProductReview>
    ));

    if (reviews.length === 0) {
        reviews = <p>No reviews yet</p>;   
    }

    return (
        <div className="product-page-container">
            <BackBtn />
            <div className="product-item-content">
                <img src={productData.image.url || PlaceholderImg} alt={ productData.title } />
                <div className="product-item-text">
                    {saved > 0 && <div className="product-item-saved">SAVE { saved },-</div>}
                    <div className="product-item-description">
                        <h2>{ productData.title }</h2>
                        <p>{ productData.description }</p>
                    </div>
                    <div className="product-item-rating">
                        <div className="product-rating no-padding">{ratingCircles}</div>
                        <p>{productData.rating}/5</p>
                    </div>
                    <div className="product-item-price">
                        <b>{ discount }</b>
                         {price !== discount && <p>{price},-</p>}
                    </div>
                    <div className="product-item-add">
                        <AddCart />
                    </div>
                </div>
            </div>
         <div className="product-item-review-container">
             <h3>Reviews</h3>
             {reviews}
         </div>
        </div>
    );
}

export default ProductPage;
