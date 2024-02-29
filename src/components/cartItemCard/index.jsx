import React from "react";
import PlaceholderImg from "../../img/placeholder-img.webp";
import DeleteItem from "../buttons/deleteItem";


function CartItemCard({ item }) {
    return (
         <div className="cart-item">
                    <DeleteItem />
                    <img src={PlaceholderImg} alt="" />
                    <div className="cart-item-info">
                        <h3>Item name</h3>
                        <p>Item description</p>
                    </div>
                    <div className="cart-item-counter">
                        <button>-</button>
                        <p>1</p>
                        <button>+</button>
                    </div>
                </div>
    )
}

export default CartItemCard;