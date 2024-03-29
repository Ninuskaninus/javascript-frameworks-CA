import styled from 'styled-components';

export const GreenBtn = styled.button`
background-color: #E6F9AF;
display: flex;
align-items: center;
flex-direction: row;
gap: 5px;
padding: 10px;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
border-radius: 8px;
width: 100%;
max-width: 300px;
justify-content: center;
heigth: 60px;
margin-bottom: 30px;


img{
    width: 20px !important;
    height: 20px !important;
}

p{
    margin: 0;
    font-size: 1.2rem;
    font-family: 'Encode Sans Condensed', sans-serif;
}

`;

export const MainBtn = styled.button`
    background-color: #E6F9AF;
    width: 200px;
    height: 30px;
    border-radius: 8px;
    margin: 0;
    font-family: $suppFont;
    font-size: 1.2rem;
    font-weight: 600;
    color: #212121;`
    ;

export const SecondaryBtn = styled.button`
    background-color: #fff;
    width: 200px;
    height: 30px;
    border-radius: 50px;
    margin: 0;
    font-family: 'Encode Sans Condensed', sans-serif;
    font-size: 1.2rem;
    font-weight: 600;
    color: #212121;
    border: #212121 1px solid;
        position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);

    @media (max-width: 700px) {
        display: none;
    }


    img{
        width: 20px;
        height: 20px;
    }`;