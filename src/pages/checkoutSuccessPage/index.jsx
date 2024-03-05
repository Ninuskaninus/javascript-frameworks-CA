import React from "react";
import { SuccessContainer, CheckoutSuccessContainer } from "./index.styles";
import BackBtn from "../../components/buttons/backBtn";

function CheckoutSuccessPage() {
    return (
        <CheckoutSuccessContainer>
            <BackBtn />
            <SuccessContainer>
                <h2>Success!</h2>
                <p>Your items will arrive shortly</p>
            </SuccessContainer>
        </CheckoutSuccessContainer>
    );
}

export default CheckoutSuccessPage;