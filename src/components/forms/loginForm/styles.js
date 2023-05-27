import styled from "styled-components";

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;

  .buttonDiv {
    height: max(48px, 4vw);
  }

  .justifyComponents {
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;
  }
`;
