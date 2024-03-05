import React from "react";
import ArrowBack  from "../../../img/arrow_back.png";
import { Link } from "react-router-dom";
import { BackBtnContainer } from "./index.styles";

function BackBtn() {
  return (
       
    <BackBtnContainer className="product-item-top">
       <Link to="/">
        <img src={ArrowBack} alt="Back to homepage"></img>
        <p>Back</p>
        </Link>
        </BackBtnContainer>
        
  );
}

export default BackBtn;