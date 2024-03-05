import styled from "styled-components";

export const ProductCardItem = styled.div`
    background-color: #fff;
    width: 320px;
    height: 550px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    @media screen and (max-width: 700px) {
    width: 100%;
    flex-direction: row;
    display: flex;
    position: relative;
    height: auto;
    }

`;

export const ProductCardTop = styled.div`
        position: relative;
    img {
            width: 100%;
            height: 400px;
            object-fit: cover;
        }

    @media screen and (max-width: 700px) {

    img{

        position: inherit;
        width: 120px;
        object-position: center;
        height: 100%;
 
    }
    .product-read-more{
    display: none;
    }
    }
`;

export const ProductDiscount = styled.div`
    background-color: #E6F9AF;
    position: absolute;
    top: 10px;

    p{
        margin: 3px;
        font-weight: 800;
    }
`;

export const ProductBottom = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: top;
    padding: 20px;

    h4{
        margin: 0;
    }

    .price-before{
        text-decoration: line-through;
        font-size: 1rem;
        margin-top: 5px;
    }

    p{
        margin: 0;
        max-height: 40px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-top: 10px;

    }

    @media screen and (max-width: 700px) {
            flex-direction: column;
    align-items: flex-start;
        padding: 10px;
        max-width: 300px;
    }

`;

export const ProductInfo = styled.div`
    max-width: 200px;

    @media screen and (max-width: 700px) {
            max-width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: left;
    p{
        white-space: normal;
        max-height: 60px;
    }
    }
`;

export const ProductPrice = styled.div`
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        p, b{
        font-size: 1.2rem;

        @media screen and (max-width: 700px) {
            flex-direction: column !important;
            gap: 0;
        }
    }
`;

export const ProductRating = styled.div`
    width: auto;
    display: flex;
    justify-content: flex-start;
    gap: 5px;
    padding: 15px 20px;
    align-items: center;
    
    @media screen and (max-width: 700px) {
        padding: 10px;
    }
`;