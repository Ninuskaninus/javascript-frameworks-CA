import styled from "styled-components";

export const HeroTopContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: auto;

    img{
        max-width: 550px;
        height: 500px;
        object-fit: cover;
        width: 100%;
    }
    p{
        color: #fff;
        font-family: 'Encode Sans Condensed', sans-serif;
        font-size: 1.5rem;
        margin-bottom: 60px;
        margin-top: 0;
    }

    @media screen and (max-width: 860px){
        flex-direction: column;
        height: auto;
        
        img{
            width: 100%;
            height: 250px;
            max-width: none;
            margin-bottom: 30px;
        }
    }
`; 

export const HeroTopTextContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: left;
    flex-direction: column;
    padding: 20px;
    height: auto;

    @media screen and (max-width: 860px){
        p{
            margin-bottom: 30px;
        }
    }
`;