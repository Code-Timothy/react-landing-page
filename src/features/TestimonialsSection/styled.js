import styled from "styled-components";

export const StyledSection = styled.section`
    background: ${({ theme }) => theme.colors.alabaster};
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
        width: 60px;
        height: 4px;
        margin-left: -30px;
        background: linear-gradient(to right, #5ca9fb 0%, #6372ff 100%);
    };
`;

export const TestimonialsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
    margin-top: 70px;
`;

export const TestimonialTile = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 15px;
    padding: 20px;
`;


export const Image = styled.img`
    width: 64px;
    height: 64px;
    border-radius: 50%;
`;

export const Rate = styled.p`
    font-size: 14px;
    font-style: italic;
    margin: 0 0 10px 0;
    line-height: 1.5;
`;

export const Author = styled.span`
    font-size: 15px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.doveGray};
`;