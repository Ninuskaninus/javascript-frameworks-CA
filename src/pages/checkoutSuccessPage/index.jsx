import React from "react";
import { SuccessContainer } from "./index.styles";
import BackBtn from "../../components/buttons/backBtn";

function CheckoutSuccessPage() {
    return (
        <div className="checkout-success-page-container">
            <BackBtn />
            <SuccessContainer>
                <h2>Success!</h2>
                <p>Your items will arrive shortly</p>
            </SuccessContainer>
        </div>
    );
}

export default CheckoutSuccessPage;