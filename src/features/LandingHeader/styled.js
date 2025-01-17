import styled, { css, keyframes } from "styled-components";

export const Container = styled.header`
    position: relative;
    height: 90vh;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const VideoBackground = styled.video`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
`;

const fallDown = keyframes`
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const Wrapper = styled.div`
    max-width: 800px;
    color: white;
    padding: 20px;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.3);

    opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
    animation: ${({ isVisible }) => isVisible ? css`${fallDown} 2s forwards` : "none"};
`;

export const Title = styled.h1`
    font-size: 82px;
    text-align: center;
    text-transform: uppercase;
    margin: 10px 0;
`;

export const Text = styled.p`
    text-align: center;
    margin: 0;
    font-size: 22px;
    font-weight: 300;
    line-height: 30px;
`;

export const Button = styled.button`
    text-transform: uppercase;
    border: none;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.malibu};
    background-image: linear-gradient(to right, #5ca9fb 0%, #6372ff 100%);
    padding: 14px 34px;
    letter-spacing: 1px;
    margin: 60px 0 0 0;
    font-size: 15px;
    font-weight: 500;
    border-radius: 25px;
    transition: all 0.5s linear;

    opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
    animation: ${({ isVisible }) => isVisible ? css`${fallDown} 2s forwards` : "none"};

    &:hover{
        cursor: pointer;
        background-image: none;
        background-color: ${({ theme }) => theme.colors.cornflowerBlue};
    }
`;