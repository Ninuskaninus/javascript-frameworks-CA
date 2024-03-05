import styled from "styled-components";

export const FooterContainer = styled.div`
    background-color: #E6F9AF;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 250px;
    flex-direction: column;

    img{
        height: 45px;
    }
`;

export const FooterLink = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;

    p{
        margin: 0;
        font-size: 0.7rem;
    }

    img{
        height: 15px;
        width: 15px;
    }
`;