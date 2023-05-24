import styled from "styled-components";

export const SearchBoxStyle = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: row;

  align-items: center;
  width: 300px;
  height: 50px;
  input {
    width: var(--imput-width);
    height: var(--imput-height);
    border-radius: var(--border-radius);
  }
  input::placeholder {
    padding-left: 5px;
  }
  label {
    margin-right: 8px;
  }
`;
