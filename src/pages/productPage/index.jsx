import React from "react";
import { useParams } from "react-router-dom";
import PlaceholderImg from "../../img/placeholder-img.webp";
import AddCart from "../../img/addCart.png";
import { AddToCartButton, ProductReview } from "./index.styles";
import { useFetch } from "../../hooks/useFetch";
import Loader from "../../components/loader";
import ErrorMessage from "../../components/error";
import BackBtn from "../../components/buttons/backBtn";

function ProductPage() {

    //API handling
    const { id } = useParams();
    const { data, isLoading, isError } = useFetch(`https://v2.api.noroff.dev/online-shop/${id}`, true);
    
    if (isError || !data) {
        return <div className="lds-loader-container"><ErrorMessage/></div>;
    }

    if (isLoading) {
        return <div className="lds-loader-container"><Loader/></div>;;
    }

        const rating = data.rating;
    const ratingCircles = Array.from({ length: 5 }, (_, index) => (
        <span key={index} className={`rateCircle ${index < rating ? 'rateChecked' : ''}`}></span>
    ));

    //price handling
    let price = data.price;
    let discount = data.discountedPrice;
    let saved = (price - discount).toFixed(0);
    console.log(data);

    //review handling
    const reviews = data.reviews.map((review) => (
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

    return (
        <div className="product-page-container">
            <BackBtn />
            <div className="product-item-content">
                <img src={data.image.url || PlaceholderImg} alt={ data.title } />
                <div className="product-item-text">
                    {saved > 0 && <div className="product-item-saved">SAVE { saved },-</div>}
                    <div className="product-item-description">
                        <h2>{ data.title }</h2>
                        <p>{ data.description }</p>
                    </div>
                    <div className="product-item-rating">
                        <div className="product-rating no-padding">{ratingCircles}</div>
                        <p>{data.rating}/5</p>
                    </div>
                    <div className="product-item-price">
                        <b>{ price }</b>
                         {price !== discount && <p>{discount},-</p>}
                    </div>
                    <div className="product-item-add">
                        <AddToCartButton>
                            <img src={AddCart} alt="" />
                            <p>Add to cart</p>
                        </AddToCartButton>
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