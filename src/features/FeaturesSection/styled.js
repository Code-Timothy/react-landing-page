import styled from "styled-components";

export const StyledSection = styled.section`
    background: ${({ theme }) => theme.colors.alabaster};
    padding-top: 10px;
`;

export const Content = styled.div`
    max-width: 1000px;
    margin: auto;
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

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
    margin-top: 40px;
`;

export const Tile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

export const IconWrapper = styled.p`
    font-size: 38px;
    margin-bottom: 20px;
    transition: all 0.5s;
    color: ${({ theme }) => theme.colors.white};
    width: 100px;
    height: 100px;
    padding: 30px 0;
    border-radius: 50%;
    background: linear-gradient(to right, #6372ff 0%, #5ca9fb 100%);
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.05);
`;

export const TileTitle = styled.h3`
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.mineShaft};
    margin: 20px 0 10px 0;
`;

export const TileText = styled.p`
    font-size: 15px;
    margin: 0 0 10px 0;
`;