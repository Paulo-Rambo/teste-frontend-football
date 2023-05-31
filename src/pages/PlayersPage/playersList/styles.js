import styled from "styled-components";

export const ListCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  .sectionRow {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }
  @media (max-width: 420px) {
    height: 65vh;
    width: 90vw;
    .sectionRow {
      padding-left: 20px;
      padding-top: 20px;
      height: 100%;
      flex-direction: column;
      overflow-x: scroll;
      justify-content: space-between;
    }
  }
`;
