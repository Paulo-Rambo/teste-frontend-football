import styled from "styled-components";

export const LeagueCardStyle = styled.div`
  max-height: 15rem;
  width: 18rem;
  margin: 25px;
  border: solid 3px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  border-radius: 16px;

  .descriptionTeam {
    display: flex;
    flex-direction: column;
    align-items: start;
  }

  .nameDiv {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  .imgBox {
    width: 100px;
    height: 100px;
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
  .teamDetails {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .buttonsDiv {
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;
