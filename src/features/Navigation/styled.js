import styled from "styled-components";

export const StyledNavigation = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 80px;
    background: ${({ theme }) => theme.colors.alabaster};
    padding: 15px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    position: sticky;
    top: 0;
    z-index: 1;
`;

export const HomeLink = styled.a`
    color: ${({ theme }) => theme.colors.mineShaft};
    text-decoration: none;
    font-size: 24px;
    font-weight: 700;
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
    position: relative;
    font-family: "Lato", sans-serif;
    text-transform: uppercase;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.emperor};
    padding: 8px 2px;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background: linear-gradient(to right, #6372ff 0%, #5ca9fb 100%);
        transition: width 0.3s ease;
    };

    &:hover::after {
        width: 100%;
    };
`;