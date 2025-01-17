import styled from "styled-components";

export const StyledSection = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 1200px;
    gap: 30px;
    margin: auto;
    padding: 100px 0;
`;

export const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Image = styled.img`
    width: 550px;
`;

export const Header = styled.h2`
    position: relative;
    text-transform: uppercase;
    margin: 0 0 20px 0;
    font-weight: 800;
    font-size: 36px;
    color: ${({ theme }) => theme.colors.mineShaft};
    margin-bottom: 15px;
    padding-bottom: 15px;

    &::after{
        position: absolute;
        content: "";
        bottom: 0;
        left: 0;
        height: 4px;
        width: 60px;
        background: linear-gradient(to right, #5ca9fb 0%, #6372ff 100%);
    };
`;

export const Text = styled.p`
    margin: 30px 0;
    line-height: 24px;
    font-size: 15px;
`;

export const Title = styled.h3`
    font-size: 22px;
    font-weight: 600;
    margin: 0 0 20px;
    color: ${({ theme }) => theme.colors.mineShaft};
`;

export const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    font-size: 14px;
    list-style: none;
    padding-left: 20px;
`;

export const Marker = styled.span`
    width: 14px;
    height: 14px;
    color: ${({ theme }) => theme.colors.malibu};
`;

export const Item = styled.li`
    display: flex;
    align-items: center;
    gap: 8px;
`;