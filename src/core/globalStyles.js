import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html{
        box-sizing: border-box;
        scroll-behavior: smooth;
    };

    *, ::before, ::after{
        box-sizing: inherit;
    };

    body{
        font-family: "Raleway", sans-serif;
        color: ${({ theme }) => theme.colors.doveGray};
    };
`;