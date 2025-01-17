import styled, { css } from "styled-components";

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
    color: ${({ theme }) => theme.colors.mineShaft};

    ${({ $white }) => $white && css`
        color: ${({ theme }) => theme.colors.white};
    `};
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
    margin: 20px 0 10px 0;
`;

export const TileText = styled.p`
    font-size: 15px;
    margin: 0 0 10px 0;

    ${({ $white }) => $white && css`
        color: ${({ theme }) => theme.colors.translucentWhite};
    `};
`;