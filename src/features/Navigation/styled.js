import styled from "styled-components";

export const StyledNavigation = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 80px;
    background: ${({ theme }) => theme.colors.alabaster};
    padding: 15px;
    position: sticky;
    top: 0;
    z-index: 1;
`;

export const Header = styled.h1`
    color: ${({ theme }) => theme.colors.mineShaft};
    font-size: 24px;
    padding: 15px;
    margin: 0;
`;

export const LinksList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    list-style: none;
    padding: 0;
`;

export const Link = styled.a`
    font-family: "Lato", sans-serif;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.emperor};
    padding: 8px 2px;
`;