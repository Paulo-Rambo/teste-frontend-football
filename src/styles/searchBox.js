import styled from "styled-components";

export const SearchBoxStyle = styled.div`
  width: 100%;
  height: max(80px, 3vw);
  margin: 1vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: max(2vw, 18px);
  input {
    width: var(--imput-width);
    height: var(--imput-height);
    border-radius: var(--border-radius);
    padding-left: max(0.5vw, 5px);
    font-size: max(2vw, 18px);
  }
  input::placeholder {
    padding-left: max(0.3vw, 5px);
  }
  label {
    margin-right: max(1vw, 8px);
  }
`;
