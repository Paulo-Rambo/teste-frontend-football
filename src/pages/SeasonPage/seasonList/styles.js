import styled from "styled-components";

export const SesionDivStyle = styled.div`
  font-size: max(2vw, 28px);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  align-items: center;

  .yearDiv {
    margin: 10px;
    background-color: var(--color-year);
    padding: max(1vw, 8px);
    border-radius: var(--card-radius-1);
    cursor: pointer;
    font-weight: 600;
    min-height: 50px;
    min-width: 100px;
    align-items: center;
    display: flex;
    justify-content: center;
  }
`;
