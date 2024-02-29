import React from "react";
import BackBtn from "../../components/buttons/backBtn";
import CartItemCard from "../../components/cartItemCard";
import TotalCounter from "../../components/totalCounter";


function Cart() {
    return <div className="cart-page-container">
        <BackBtn />
        <div className="cart-container">
            <div className="cart-head">
                <h2>Your items</h2>
            </div>
            <div className="cart-items-container">
                <CartItemCard />
            </div>
            <div className="cart-total-container">
                <h2>Your total</h2>
                <TotalCounter />
            </div>

        </div>
  </div>;
}

export default Cart;