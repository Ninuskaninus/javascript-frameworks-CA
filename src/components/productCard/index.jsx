import React, { useState, useEffect } from 'react';
import PlaceholderImg from '../../img/placeholder-img.webp';
import { Link } from 'react-router-dom';
import ReadMoreItem from '../buttons/readmoreItem';

export const ProductCard = ({ data }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [productData, setProductData] = useState(null);

    useEffect(() => {
        setProductData(data);
    }, [data]);

    const price = productData?.price;
    const discount = productData?.discount;
    const saved = (price - discount).toFixed(0);

    const rating = productData?.rating;
    const ratingCircles = Array.from({ length: 5 }, (_, index) => (
        <span key={index} className={`rateCircle ${index < rating ? 'rateChecked' : ''}`}></span>
    ));

    return (
        <Link to={`product/${productData?.id}`}>
            <div
                id={productData?.id}
                className="product-card"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="product-top">
                    <img src={productData?.imageUrl || PlaceholderImg} alt="" />
                    {saved > 0 && (
                        <div className="product-discount">
                            <p>
                                Save <span>{saved},-</span>
                            </p>
                        </div>
                    )}
                    {isHovered && <ReadMoreItem />}
                </div>
                <div className="product-body">
                    <div className="product-bottom">
                        <div className="product-information">
                            <h4>{productData?.title}</h4>
                            <p>{productData?.description}</p>
                        </div>
                        <div className="product-price">
                            <b>{discount},-</b>
                            {price !== discount && <p className="price-before">{price},-</p>}
                        </div>
                    </div>
                    <div className="product-rating">
                        {ratingCircles} {productData?.rating}/5
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
