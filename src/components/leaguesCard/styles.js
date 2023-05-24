import styled from "styled-components";

export const LeagueCardStyle = styled.div`
  max-height: 15rem;
  width: 15rem;
  margin: 25px;
  border: solid 3px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px;
  cursor: pointer;
  border-radius: 16px;

  .nameDiv {
    display: flex;
    justify-content: space-between;
  }
  .imgBox {
    max-height: 12rem;
    max-width: 15rem;
    padding: 10px;
  }
  img {
    max-height: 100%;
    max-width: 100%;
  }
`;
