import styled from "styled-components";

export const PlayerCardStyle = styled.div`
  height: var(--player-card-height);
  width: var(--player-card-width);
  margin: 1vw;
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
    width: 100%;
    font-size: var(--player-card-font-size);
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    padding-left: 12px;
    font-weight: 600;
  }
  .imgBox {
    width: 9vw;
    height: 9vw;
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
    width: 100%;
    height: 100%;
    justify-content: space-between;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .buttonsDiv {
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;
