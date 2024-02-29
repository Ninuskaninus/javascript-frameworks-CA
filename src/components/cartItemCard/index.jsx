import React from "react";
import PlaceholderImg from "../../img/placeholder-img.webp";
import DeleteIcon from "../../img/delete.png";

function CartItemCard({ item }) {
    return (
         <div className="cart-item">
                    <div className="cart-delete-item">
                        <img src={DeleteIcon} alt="" />
                    </div>
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