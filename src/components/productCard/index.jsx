import React, { useState, useEffect } from 'react';
import PlaceholderImg from '../../img/placeholder-img.webp';
import { Link } from 'react-router-dom';
import ReadMoreItem from '../buttons/readmoreItem';
import {ProductRating, ProductPrice, ProductInfo, ProductBottom, ProductCardItem, ProductCardTop, ProductDiscount} from './index.styles';

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
            <ProductCardItem
                id={productData?.id}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <ProductCardTop>
                    <img src={productData?.imageUrl || PlaceholderImg} alt="" />
                    {saved > 0 && (
                        <ProductDiscount>
                            <p>
                                Save <span>{saved},-</span>
                            </p>
                        </ProductDiscount>
                    )}
                    {isHovered && <ReadMoreItem />}
                </ProductCardTop>
                <div>
                    <ProductBottom>
                        <ProductInfo>
                            <h4>{productData?.title}</h4>
                            <p>{productData?.description}</p>
                        </ProductInfo>
                        <ProductPrice>
                            <b>{discount},-</b>
                            {price !== discount && <p className="price-before">{price},-</p>}
                        </ProductPrice>
                    </ProductBottom>
                    <ProductRating>
                        {ratingCircles} {productData?.rating}/5
                    </ProductRating>
                </div>
            </ProductCardItem>
        </Link>
    );
};

export default ProductCard;
