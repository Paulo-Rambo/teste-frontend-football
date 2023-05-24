import styled from "styled-components";

export const RotateImage = styled.div`
  width: 7rem;
  height: 7rem;

  .rotating-image {
    animation: rotate 2s linear infinite;
    max-width: 100%;
    max-height: 100%;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
