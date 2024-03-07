import React from "react";
import PlaceholderImg from "../../img/placeholder-img.webp";
import { useFetch } from "../../hooks/useFetch";
import Loader from "../loader";
import ErrorMessage from "../error";
import {CartItem, CartItemInfo,CartPriceContainer} from "./index.styles";

function CartItemCard() {
    const { data, isLoading, isError } = useFetch("https://v2.api.noroff.dev/online-shop/");
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const itemsInCart = data.filter(item => cartItems.some(cartItem => cartItem.id === item.id)); 

    if (isError || !data) {
        return <div className="lds-loader-container"><ErrorMessage /></div>;
    } if (isLoading) {
        return <div className="lds-loader-container"><Loader /></div>;
    } if (itemsInCart.length === 0) {
        return <div className="lds-loader-container"><p>No items in cart</p></div>;
    }
    
    return (
        <div>
            {itemsInCart.map(item => (
                <CartItem id={item.id} key={item.id}>
                    <img src={item.imageUrl || PlaceholderImg} alt={item.title} />
                    <CartItemInfo>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <CartPriceContainer>
                            <b>{item.discount}</b>
                            {item.discount !== item.price && (
                                <p>{item.price},-</p>
                            )}
                        </CartPriceContainer>
                    </CartItemInfo>
                </CartItem>
            ))}
        </div>
    );
}




export default CartItemCard;
