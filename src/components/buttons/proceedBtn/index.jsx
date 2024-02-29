import React from "react";
import { AddToCartButton } from "../../../pages/productPage/index.styles";
import { Link } from "react-router-dom";

function ProceedBtn() {
    return (
        <Link to="/checkout">
        <AddToCartButton><p>Proceed to chekout</p></AddToCartButton>
        </Link>
            )
}

export default ProceedBtn;