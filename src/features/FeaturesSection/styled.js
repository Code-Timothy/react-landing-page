import styled from "styled-components";

export const StyledSection = styled.section`
    background: ${({ theme }) => theme.colors.alabaster};
    padding-top: 10px;
`;

export const Title = styled.h2`
    position: relative;
    font-size: 36px;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.mineShaft};
    text-transform: uppercase;
    margin: 0 0 15px 0;
    padding-bottom: 15px;
    text-align: center;

    &::after{
        position: absolute;
        content: "";
        left: 50%;
        bottom: 0;
        width: 60px;
        height: 4px;
        margin-left: -30px;
        background: linear-gradient(to right, #5ca9fb 0%, #6372ff 100%);
    };
`;