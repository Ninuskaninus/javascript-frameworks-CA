import React from "react";
import BackBtn from "../../components/buttons/backBtn";
import CartItemCard from "../../components/cartItemCard";
import ProceedBtn from "../../components/buttons/proceedBtn";


function Cart() {
    return <div className="cart-page-container">
        <BackBtn />
        <div className="cart-container">
            <div className="cart-head">
                <h2>Your items</h2>
            </div>
            <div className="cart-items-container">
                <CartItemCard />
                <CartItemCard />
            </div>
            <div className="cart-bottom">
                <ProceedBtn />
            </div>
        </div>
  </div>;
}

export default Cart;