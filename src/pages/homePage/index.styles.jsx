import styled from "styled-components";

export const HomeContainer = styled.div`
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

export const HeroContainer = styled.div`
    background-color: #212121;
    max-width: 1000px;
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
`;

export const HeroSecondContainer = styled.div`
    background-color: #212121;
    max-width: 1000px;
    width: 100%;
    height: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 20px;

    p{
        color: #fff;
        font-family: 'Encode Sans Condensed', sans-serif;
        font-size: 1.5rem;
        margin: 0;
    }

                @media screen and (max-width: 600px) {
                    display: none;
                }
`;

export const ProductCardContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1000px;
    margin-top: 50px;
    margin-bottom: 50px;

    a{
       width: 340px; 
    }

    @media screen and (max-width: 756px){
        a{
            width: 100%;
        }
    }
`;

