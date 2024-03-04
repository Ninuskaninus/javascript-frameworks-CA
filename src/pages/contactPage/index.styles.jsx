import styled from "styled-components";

export const ContactPageContainer = styled.div`
    width: 100%;
    max-width: 720px;
    padding: 50px;
        @media screen and (max-width: 425px) {
            padding: 10px;
        }
`;

export const ContactForm = styled.form`

    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input, textarea{
        width: 100%;
        max-width: 400px;
        padding: 10px;
        border: none;
        border-radius: 5px;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        &:focus{
            outline: none;
        }
    }

    label{
        margin-bottom: 5px;
    }
`;

export const ContactFormContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #E6F9AF;
    margin: 30px 0;
    padding: 50px;
    border-radius: 6px;
`;

export const ContactFormInput = styled.div`
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px 0;
`;