import React, { useState } from "react";
import addIcon from "../../../img/addCart.png";
import { GreenBtn } from "../index.styles";
import { useParams } from "react-router-dom";
import { useCart } from "../../cartContext/index.jsx";

function AddCart() {
    const { id } = useParams();
    const { updateCartCount } = useCart();
    const [added, setAdded] = useState(false);

    const handleAddToCart = () => {
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        const item = cartItems.find((item) => item.id === id);

        if (item) {
            alert('Item already in cart.');
            return;
        }

        cartItems.push({ id });
        localStorage.setItem("cart", JSON.stringify(cartItems));
        updateCartCount();
        setAdded(true);
    };

    return (
        <GreenBtn onClick={handleAddToCart}>
            <img src={addIcon} alt="" />
            <p>{added ? "Item added!" : "Add to cart"}</p>
        </GreenBtn>
    );
}

export default AddCart;
