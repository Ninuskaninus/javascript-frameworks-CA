import React from "react";
import addIcon from "../../../img/addCart.png";
import {GreenBtn} from "../index.styles";

function AddCart() {
    return (
        <GreenBtn>
            <img src={addIcon} alt="" />
            <p>Add to cart</p>
        </GreenBtn>
    );
}

export default AddCart;
