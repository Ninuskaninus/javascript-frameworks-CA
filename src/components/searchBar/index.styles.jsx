import styled from "styled-components";

export const SearchContainer = styled.div`
    width: 100%;
    max-width: 1000px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    min-height: 200px;
    background-color: #E6F9AF;
    margin-top: 20px;
    flex-direction: column;
    padding: 20px 0;
    @media screen and (max-width: 497px){
        padding: 0 20px;

        h2{
            text-align: center;
        }
        
    }
`;

export const SearchForm = styled.form`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    justify-content: center;
    width: 450px;
    margin-top: 20px;
    background-color: #fff;
    border-radius: 25px;
    padding: 0 10px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    input{
        border: none;
        background-color: transparent;
        outline: none;
        padding: 0;
        margin: 0;
        width: 100%;
        height: 40px;
        padding: 0 10px;
    }
    

@media screen and (max-width: 497px){
    width: 100%;
}`;

export const Suggested = styled.div`
    width: 450px;
    margin: 10px 0;
    padding: 5px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    display: flex;
    }
`;



export const Results = styled.p`
        margin: 0;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        padding: 10px;
        cursor: pointer;

        &:hover{
            background-color: #98B83C;
            box-shadow: none;
            color: #fff;
        }
`;