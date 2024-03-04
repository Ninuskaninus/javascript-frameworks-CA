import React from "react";
import { GreenBtn } from "../index.styles";
import { Link } from "react-router-dom";


function ProceedBtn() {
    return (
        <Link to="/checkoutSuccess">
        <GreenBtn><p>Proceed to chekout</p></GreenBtn>
        </Link>
            )
}

export default ProceedBtn;