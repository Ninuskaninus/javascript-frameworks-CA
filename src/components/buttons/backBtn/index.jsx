import React from "react";
import ArrowBack  from "../../../img/arrow_back.png";
import { Link } from "react-router-dom";
import { BackBtnContainer } from "./index.styles";

function BackBtn() {
  return (
        <Link to="/">
            <BackBtnContainer className="product-item-top">
                <img src={ArrowBack} alt="Back to homepage"></img>
                <p>Back</p>
        </BackBtnContainer>
        </Link>
  );
}

export default BackBtn;