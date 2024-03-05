import React from "react";
import BackBtn from "../../components/buttons/backBtn";
import CartItemCard from "../../components/cartItemCard";
import TotalCounter from "../../components/totalCounter";
import {CartTotalContainer, CartPageContainer,CartContainer, CartItemContainer, CartHeadContainer} from "./index.styles";

function Cart() {
    return <CartPageContainer>
        <BackBtn />
        <CartContainer>
            <CartHeadContainer>
                <h2>Your items</h2>
            </CartHeadContainer>
            <CartItemContainer>
                <CartItemCard />
            </CartItemContainer>
            <CartTotalContainer>
                <h2>Your total</h2>
                <TotalCounter />
            </CartTotalContainer>

        </CartContainer>
  </CartPageContainer>;
}

export default Cart;