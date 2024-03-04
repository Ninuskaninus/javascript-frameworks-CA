import React from "react";
import { GreenBtn } from "../index.styles";
import { Link } from "react-router-dom";


function ProceedBtn() {
    const handleCheckoutBtn = () => {
        if (localStorage.getItem('cart') === null) {
            alert('No items in cart');
        } else {
            window.location.replace('/checkout');
        }
    }

    return (
        <Link onClick={handleCheckoutBtn}>
        <GreenBtn><p>Proceed to chekout</p></GreenBtn>
        </Link>
            )
}

export default ProceedBtn;