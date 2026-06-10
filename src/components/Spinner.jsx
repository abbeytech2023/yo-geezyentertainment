import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0% {
    opacity: 0.4;
    transform: scale(0.95);
  }
  50% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0.4;
    transform: scale(0.95);
  }
`;

const StyledLoaderText = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #6c0716;
  letter-spacing: 2px;
  text-transform: uppercase;
  animation: ${pulse} 1.5s infinite ease-in-out;
`;

const StyledOverlay = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Spinner = () => {
  return (
    <StyledOverlay className="flex justify-center items-center">
      <StyledLoaderText>Yogeezy Entertainment</StyledLoaderText>
    </StyledOverlay>
  );
};
