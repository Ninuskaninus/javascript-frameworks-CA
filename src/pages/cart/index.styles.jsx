import styled from "styled-components";

export const CartPageContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
    flex-direction: column;
    padding: 0 20px;
    min-height: 80vh;
    width: 100%;

    a{
        width: 100%;
    }
`;

export const CartContainer = styled.div`
    width: 100%;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    padding: 20px;

    @media screen and (max-width: 547px){
        padding: 0px;
    }
`;

export const CartItemContainer = styled.div`
 width: 100%;
`;

export const CartHeadContainer = styled.div`
margin: 30px 0;
`;

export const CartTotalContainer = styled.div`
margin-top: 50px;
`;
