import styled from "styled-components";

export const RotateImage = styled.div`
  width: 14vw;
  height: max(22vw, 220px);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .imgBox {
    width: max(7vw, 80px);
    height: max(7vw, 80px);
  }
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
