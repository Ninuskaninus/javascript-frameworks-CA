import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { GreenBtn } from "../../components/buttons/index.styles";
import { useFetch } from "../../hooks/useFetch";
import Loader from "../../components/loader";
import ErrorMessage from "../../components/error";
import BackBtn from "../../components/buttons/backBtn";
import { SuccessContainer, SuccessItems, CheckoutSuccessContainer } from "./index.styles";
import { CartProvider } from "../../components/cartContext/index";
import { Helmet } from "react-helmet";


function Checkout() {
    const { data, isLoading, isError } = useFetch("https://v2.api.noroff.dev/online-shop/");
    const cartItems = useMemo(() => JSON.parse(localStorage.getItem('cart')) || [], []);
    const itemsInCart = data.filter(item => cartItems.some(cartItem => cartItem.id === item.id));

    const [redirect, setRedirect] = useState(false);

    const handleButtonClick = () => {
        localStorage.removeItem('cart');
            CartProvider();
            setRedirect(true);
    };

    useEffect(() => {
        if (cartItems.length === 0) {
            CartProvider();
        }
    }, [cartItems]);



    if (isError || !data) {
        return <div className="lds-loader-container"><ErrorMessage /></div>;
    } if (isLoading) {
        return <div className="lds-loader-container"><Loader /></div>;
    } if (itemsInCart.length === 0) {
        return <div className="lds-loader-container"><p>No items in cart</p></div>;
    }

    return (
        <CheckoutSuccessContainer>
            <Helmet>
                <title>Checkout | Trendz</title>
            </Helmet>
            {redirect && window.location.replace('/checkoutSuccess')}
            <BackBtn />
            <SuccessContainer className="success-container">
                <h2>Do you want to order these elements?</h2>
                <SuccessItems className="success-items">
                    {itemsInCart.map(item => (
                        <b key={item.id}>{item.title}</b>
                    ))}
                </SuccessItems>
            </SuccessContainer>
            <div>
                <Link to="/checkoutSuccess" onClick={handleButtonClick}>
                    <GreenBtn>
                        <p>Buy items</p>
                    </GreenBtn>
                </Link>
            </div>
        </CheckoutSuccessContainer>
    );
}

export default Checkout;
