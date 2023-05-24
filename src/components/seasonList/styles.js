import styled from "styled-components";

export const SesionDivStyle = styled.div`
  font-size: 28px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;

  .yearDiv {
    margin: 10px;
    background-color: var(--color-year);
    padding: 8px;
    border-radius: 16px;
    cursor: pointer;
    font-weight: 600;
    min-height: 50px;
    min-width: 100px;
    align-items: center;
    display: flex;
    justify-content: center;
  }
`;
