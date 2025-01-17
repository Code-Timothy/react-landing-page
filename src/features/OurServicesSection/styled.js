import styled from "styled-components";

export const StyledSection = styled.section`
    background: linear-gradient(to right, #6372ff 0%, #5ca9fb 100%);
    padding: 100px 0;
`;

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`;

export const SectionHeader = styled.h2`
    position: relative;
    margin: 15px 0;
    padding-bottom: 15px;
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
    text-transform: uppercase;
    margin: 0 0 20px;
    font-weight: 800;
    font-size: 36px;

    &::after{
        position: absolute;
        content: "";
        bottom: 0;
        left: 50%;
        height: 4px;
        width: 60px;
        margin-left: -30px;
        background: rgba(255, 255, 255, 0.3);
    };
`;

export const SectionText = styled.p`
    text-align: center;
    color: ${({ theme }) => theme.colors.translucentWhite};
    font-size: 18px;
    margin-bottom: 30px;
`;