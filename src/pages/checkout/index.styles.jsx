import styled from "styled-components";

export const CheckoutSuccessContainer = styled.div`
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

export const SuccessContainer = styled.div`
    background-color: #E6F9AF;
    padding: 50px;
    margin: 50px 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    h2, p{
        text-align: center;
    }
    `;

export const SuccessItems = styled.div`
        background-color: #fff;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: left;
    gap: 10px;
    margin: 30px 0;
    `;