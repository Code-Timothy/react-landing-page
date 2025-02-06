import styled from "styled-components";

export const StyledFooter = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Link = styled.a`
    color: ${({ theme }) => theme.colors.malibu};
    text-decoration: none;

    &:hover{
        cursor: pointer;
        opacity: 90%;
    };
`;