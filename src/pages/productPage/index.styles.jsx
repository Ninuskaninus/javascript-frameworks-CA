import styled from "styled-components";

export const AddToCartButton = styled.button`
background-color: #E6F9AF;
display: flex;
align-items: center;
flex-direction: row;
gap: 5px;
padding: 10px;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
border-radius: 8px;
width: 100%;
max-width: 200px;
justify-content: center;
heigth: 60px;

img{
    width: 20px;
    height: 20px;
}

p{
    margin: 0;
    font-size: 1.2rem;
    font-family: 'Encode Sans Condensed', sans-serif;
}

`;

export const ProductReview = styled.div`
    margin-top: 20px;
    boder-bottom: 1px solid #000;
    padding-bottom: 5px;

    h5{
        margin: 0;
        margin-bottom: 5px;
    }


`;
