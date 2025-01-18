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

export const ImagesContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1px;
    margin-top: 70px;
`;

export const Image = styled.img`
    width: 400px;
    height: 260px;
`;

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
`;

export const ModalContent = styled.div`
    position: relative;
    max-width: 90%;
    max-height: 90%;
    background: ${({ theme }) => theme.colors.white};
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);

    img {
        max-width: 100%;
        max-height: 100%;
        display: block;
        border-radius: 10px;
    };
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 24px;
    color: ${({ theme }) => theme.colors.mineShaft};
    cursor: pointer;

    &:hover {
        color: ${({ theme }) => theme.colors.malibu};
    };
`;

export const ModalImage = styled.img`
    width: 1100px;
    height: 500px;
    object-fit: contain;
`;