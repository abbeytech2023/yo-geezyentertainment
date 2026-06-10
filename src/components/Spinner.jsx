import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0% {
    opacity: 0.5;
    transform: scale(0.98);
  }
  50% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0.5;
    transform: scale(0.98);
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`;

const dots = keyframes`
  0%, 20% { content: ""; }
  40% { content: "."; }
  60% { content: ".."; }
  80%, 100% { content: "..."; }
`;

const StyledOverlay = styled.div`
  width: 100%;
  height: 100vh;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoaderWrapper = styled.div`
  text-align: center;
`;

const StyledLoaderText = styled.h1`
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: 800;
  letter-spacing: 3px;
  text-transform: uppercase;

  background: linear-gradient(90deg, #6c0716 20%, #d41c3d 50%, #6c0716 80%);

  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  animation:
    ${pulse} 1.8s infinite ease-in-out,
    ${shimmer} 3s linear infinite;
`;

const LoadingText = styled.p`
  margin-top: 14px;
  color: #d4d4d8;
  font-size: 0.95rem;
  letter-spacing: 1px;

  &::after {
    content: "";
    animation: ${dots} 1.5s infinite;
  }
`;

export const Spinner = () => {
  return (
    <StyledOverlay>
      <LoaderWrapper>
        <StyledLoaderText>Yogeezy Entertainment</StyledLoaderText>

        <LoadingText>Loading content</LoadingText>
      </LoaderWrapper>
    </StyledOverlay>
  );
};
