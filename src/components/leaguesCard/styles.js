import styled from "styled-components";

export const LeagueCardStyle = styled.div`
  max-height: 15rem;
  width: 20rem;
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
    flex-direction: column;
    justify-content: space-between;
  }
  .imgBox {
    width: 100%;
    height: 100%;
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  img {
    max-height: 100%;
    max-width: 100%;
  }
`;
