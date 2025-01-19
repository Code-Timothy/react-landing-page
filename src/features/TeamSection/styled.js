import styled from "styled-components";

export const StyledSection = styled.section`
    max-width: 1200px;
    margin: auto;
    padding: 100px 0;
`;

export const SectionHeader = styled.h2`
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
        height: 4px;
        width: 60px;
        margin-left: -30px;
        background: linear-gradient(to right, #5ca9fb 0%, #6372ff 100%);
    };
`;

export const SectionText = styled.p`
    text-align: center;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.boulder};
    margin: 0;
`;

export const TeamContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    margin-top: 70px;
`;

export const Teammate = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Image = styled.img`
    width: 240px;
    height: 240px;
`;

export const Name = styled.h4`
    font-size: 18px;
    color: ${({ theme }) => theme.colors.mineShaft};
    font-weight: 600;
    margin: 15px 0 0 0;
`;

export const Profession = styled.span`
    font-size: 15px;
    margin: 5px 0 10px 0;
`;