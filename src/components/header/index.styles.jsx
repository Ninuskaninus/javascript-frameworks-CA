import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    flex-direction: row;
    height: 70px;
    align-items: center;
    background-color: #212121;
        padding: 0 20px;
    justify-content: space-between;
`;

export const Nav = styled.nav`
    background-color: #212121;
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100%;
    max-width: 1000px;


    img{
        height: 30px;
    }
`;

export const NavLinks = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    flex-direction: row;
`;