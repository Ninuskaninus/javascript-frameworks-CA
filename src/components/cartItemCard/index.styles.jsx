import styled from "styled-components";

export const CartItem = styled.div`
    background: #F9F9F9;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    margin-bottom: 15px;
        img{
            width: 100%;
            max-width: 200px;
            height: 200px;
            object-fit: cover;
        }
        @media screen and (max-width: 547px) {
            img{
                display: none;
            }
  
        }
`;

export const CartItemInfo = styled.div`
    width: 100%;
    padding: 10px;
    h3{
        font-size: 1.5rem;
        margin: 0;
    }

    p{
        font-size: 1rem;
        margin: 0;
    }
`;

export const CartPriceContainer = styled.div`
    margin-top: 20px;
    b{
        font-size: 1.3rem;
    }

    p{
        text-decoration: line-through;
    }
`;
