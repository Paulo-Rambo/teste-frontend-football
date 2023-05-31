import styled from "styled-components";

export const ListCards = styled.div`
  display: flex;
  flex-wrap: wrap;
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
      height: 100%;
      flex-direction: column;
      overflow-x: scroll;
      justify-content: space-between;
    }
  }
`;
