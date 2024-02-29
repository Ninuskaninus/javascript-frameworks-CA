import React from "react";
import ProceedBtn from "../../components/buttons/proceedBtn";
import { TotalCounterContainer, TotalItem, TotalPrice, TotalBtnContainer } from "./index.styles";
import { useFetch } from "../../hooks/useFetch";


function TotalCounter() { 
    const { data, isLoading, isError } = useFetch("https://v2.api.noroff.dev/online-shop/");
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const itemsInCart = data.filter(item => cartItems.some(cartItem => cartItem.id === item.id));

    const totalItems = itemsInCart.length;

    const findTotal = itemsInCart.reduce((acc, item) => acc + item.discount, 0);
    const totalPrice = findTotal.toFixed(2);

    const totalSaved = itemsInCart.reduce((acc, item) => acc + (item.price - item.discount), 0);
    const savedPrice = totalSaved.toFixed(2);



    return (
        <TotalCounterContainer className="total-counter">
            <div className="total-list">
                <TotalItem>
                    <p>Items</p>
                    <p>{totalItems}</p>
                </TotalItem>
                <TotalItem>
                    <p>Amout saved</p>
                    <p>- {savedPrice},-</p>
                </TotalItem>
                <TotalPrice>
                    <p>Total</p>
                    <p>{totalPrice},-</p>
                </TotalPrice>
            </div>
            <TotalBtnContainer>
                <ProceedBtn />
            </TotalBtnContainer>
        </TotalCounterContainer>
    );
};

export default TotalCounter;