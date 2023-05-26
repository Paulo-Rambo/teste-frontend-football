import styled from "styled-components";

export const FormInputBoxStyle = styled.div`
  width: 100%;
  height: max(100px, 12vw);
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;

  label {
    font-size: max(1.8vw, 16px);
  }
  input {
    font-size: max(2vw, 18px);
    width: 100%;
  }
`;
