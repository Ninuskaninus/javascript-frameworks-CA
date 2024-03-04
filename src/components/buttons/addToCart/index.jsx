import React from "react";
import addIcon from "../../../img/addCart.png";
import { GreenBtn } from "../index.styles";
import { useParams } from "react-router-dom";

function AddCart() {
    const { id } = useParams();

    const handleAddToCart = () => {
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        const item = cartItems.find((item) => item.id === id);

        if (!item) {
            cartItems.push({ id });
            localStorage.setItem("cart", JSON.stringify(cartItems)); 
        }
    };

    return (
        <GreenBtn onClick={handleAddToCart}>
            <img src={addIcon} alt="" />
            <p>Add to cart</p>
        </GreenBtn>
    );
}

export default AddCart;
