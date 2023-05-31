import styled from "styled-components";

export const LeagueCardStyle = styled.div`
  height: var(--team-card-height);
  width: var(--team-card-width);
  min-width: 260px;
  min-height: 168px;
  margin: 1.4vw;
  border: solid 3px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: max(1vw, 8px);
  border-radius: max(var(--card-radius-1), 16px);
  border: solid 1px;
  border-color: #d5d5d5;
  background-color: #f6faff;
  border-radius: var(--card-radius-1);
  border: solid 0.1px;
  border-color: var(--color-border-card-1);
  -webkit-box-shadow: 10px 9px 23px 1px rgba(0, 0, 0, 0.33);
  -moz-box-shadow: 10px 9px 23px 1px rgba(0, 0, 0, 0.33);
  box-shadow: 10px 9px 23px 1px rgba(0, 0, 0, 0.33);

  .descriptionTeam {
    display: flex;
    flex-direction: column;
    align-items: start;
    font-size: max(var(--player-card-font-size), 16px);
  }

  .nameDiv {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 10px;
    font-size: max(var(--player-card-font-size), 16px);
  }
  .imgBox {
    width: 8vw;
    height: 8vw;
    min-height: 80px;
    min-width: 80px;
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  img {
    height: 100%;
    width: 100%;
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

  @media (max-width: 420px) {
    height: 50vw;
    width: 68vw;

    .imgBox {
      width: 24vw;
      height: 24vw;
    }

    .nameDiv {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      font-size: 20px;
      font-weight: 600;
    }
  }
`;
