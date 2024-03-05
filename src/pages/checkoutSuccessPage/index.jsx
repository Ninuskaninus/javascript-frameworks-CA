import React from "react";
import { SuccessContainer, CheckoutSuccessContainer } from "./index.styles";
import BackBtn from "../../components/buttons/backBtn";
import { Helmet } from "react-helmet";

function CheckoutSuccessPage() {
    return (
        <CheckoutSuccessContainer>
            <Helmet>
                <title>Checkout Success | Trendz</title>
            </Helmet>
            <BackBtn />
            <SuccessContainer>
                <h2>Success!</h2>
                <p>Your items will arrive shortly</p>
            </SuccessContainer>
        </CheckoutSuccessContainer>
    );
}

export default CheckoutSuccessPage;