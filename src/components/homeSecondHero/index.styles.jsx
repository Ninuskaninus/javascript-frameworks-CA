import styled from "styled-components";

export const HeroSecondContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    img{
        max-width: 550px;
        height: 180px;
        object-fit: cover;
    }
    p{
        color: #fff;
        font-family: 'Encode Sans Condensed', sans-serif;
        font-size: 1.5rem;
        margin-top: 0;
    }

    @media screen and (max-width: 860px){
        
        img{
            width: 50%;
            max-width: none;
        }
    }

`;	

export const HeroSecondTextContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: left;
    flex-direction: column;
    padding: 0 20px;

    @media screen and (max-width: 860px){
        p{
            margin-bottom: 30px;
        }
    }
`;

export const HeroBtnContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;

    @media screen and (max-width: 800px){
        display: none;
    }
`;