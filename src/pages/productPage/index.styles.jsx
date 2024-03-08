import styled from "styled-components";

export const ProductPageContainer = styled.div`
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

export const ProductReview = styled.div`
    margin-top: 20px;
    boder-bottom: 1px solid #000;
    padding-bottom: 5px;

    h5{
        margin: 0;
        font-size: 1.2rem;
    }

    p{
        margin: 0;
        margin-top: 5px;
        border-bottom: 1px solid #DFDFDF;
        padding-bottom: 10px;
    }
`;

export const ProductItemContent = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 30px;
    gap: 30px;
    width: 100%;
    justify-content: center;
    img{
        width: 450px;
        height: 541px;
        object-fit: cover;
        object-position: center;
    }
     @media screen and (max-width: 700px) {
        flex-direction: column;
        justify-content: center;
        max-width: 500px;

        img{
            width: 100%;
            height: auto;
            object-fit: cover;
            object-position: center;
        }
        }
`;

export const ProductItemText = styled.div`
            display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    max-width: 420px;
    justify-content: center;

    @media screen and (max-width: 700px) {
        max-width: 100%;
    
    }
`;

export const ProductItemSaved = styled.div`
    background-color: #E6F9AF;
    padding: 5px;
    font-weight: 800;
    width: 100%
`;

export const ProductItemDescription = styled.div`
    margin-top: 40px;
    p{
        margin: 0;
    }
`;

export const ProductItemRating = styled.div`
    width: auto;
    display: flex;
    justify-content: flex-start;
    gap: 5px;
    align-items: center;
    
    @media screen and (max-width: 700px) {
        padding: 10px;
    }
`;

export const ProductItemPrice = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    font-size: 1.5rem;
    margin-bottom: 30px;

    b{
        margin: 0;
    }

    p{
        margin: 0;
        text-decoration: line-through;
    }
`;

export const ProductItemReviewContainer = styled.div`
    background: #F9F9F9;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    width: 100%;
    max-width: 900px;
    padding: 10px;
    margin-top: 20px;
    margin-bottom: 30px;

    h3{
        margin: 0;
    }
`;

export const ProductReviewTop = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
`;

export const ProductRating = styled.div`
width: auto;
    display: flex;
    justify-content: flex-start;
    gap: 5px;
    align-items: center;
`;

export const ProductRatingText = styled.div`

`;