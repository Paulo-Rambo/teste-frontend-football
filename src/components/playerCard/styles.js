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
  padding: max(1vw, 5px);
  border-radius: max(var(--card-radius-1), 14px);
  border: solid 0.1px;
  border-color: var(--color-border-card-1);
  -webkit-box-shadow: 10px 9px 23px 1px rgba(0, 0, 0, 0.33);
  -moz-box-shadow: 10px 9px 23px 1px rgba(0, 0, 0, 0.33);
  box-shadow: 10px 9px 23px 1px rgba(0, 0, 0, 0.33);

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
    width: 100%;
    height: 10vw;
    min-height: 80px;
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  img {
    height: 100%;
    max-height: 100%;
    max-width: 100%;
    min-width: 80px;
    min-height: 80px;
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
