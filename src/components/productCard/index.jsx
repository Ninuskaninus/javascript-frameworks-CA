import React, { useState } from 'react';
import PlaceholderImg from '../../img/placeholder-img.webp';
import { Link } from 'react-router-dom';
import ReadMoreItem from '../buttons/readmoreItem';


export const ProductCard = ({ data }) => {
    const [isHovered, setIsHovered] = useState(false);

    // Price handling
    const price = data.price;
    const discount = data.discount;
    const saved = (price - discount).toFixed(0);

    // Rating handling
    const rating = data.rating;
    const ratingCircles = Array.from({ length: 5 }, (_, index) => (
        <span key={index} className={`rateCircle ${index < rating ? 'rateChecked' : ''}`}></span>
    ));

    return (
        <Link to={`product/${data.id}`}>
            <div
                id={data.id}
                className="product-card"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="product-top">
                    <img src={data.imageUrl || PlaceholderImg} alt="" />
                    {saved > 0 && (
                        <div className="product-discount">
                            <p>
                                Save <span>{saved},-</span>
                            </p>
                        </div>
                    )}
                    {isHovered && (
                        <ReadMoreItem/>
                    )}
                </div>
                <div className="product-body">
                    <div className="product-bottom">
                        <div className="product-information">
                            <h4>{data.title}</h4>
                            <p>{data.description}</p>
                        </div>
                        <div className="product-price">
                            <b>{discount},-</b>
                            {price !== discount && <p className="price-before">{price},-</p>}
                        </div>
                    </div>
                    <div className="product-rating">{ratingCircles}</div>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
