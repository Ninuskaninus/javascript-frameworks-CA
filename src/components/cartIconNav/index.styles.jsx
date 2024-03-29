import styled from "styled-components";

export const CartBtnNav = styled.div`
    position: relative;

    .cart-icon-counter{
        position: absolute;
        top: -5px;
        right: -5px;
        background-color: #fff;
        color: $primaryBlack;
        border-radius: 50%;
        font-size: 12px;
        width: 18px;
        height: 18px;
        padding: 3px;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;

        p{
            margin: 0;
            font-family: 'Encode Sans Condensed', sans-serif;
            font-size: 0.8rem;
            font-weight: 600;
        }
    }
`;