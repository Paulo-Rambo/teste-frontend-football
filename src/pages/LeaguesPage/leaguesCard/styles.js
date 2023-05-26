import styled from "styled-components";

export const LeagueCardStyle = styled.div`
  height: 18vw;
  width: 26vw;
  min-height: 160px;
  min-width: 260px;
  margin: 25px;
  border: solid 3px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: max(0.8vw, 5px);
  cursor: pointer;
  border-radius: var(--card-radius-1);
  border: solid 0.1px;
  border-color: var(--color-border-card-1);
  -webkit-box-shadow: 10px 9px 23px 1px rgba(0, 0, 0, 0.33);
  -moz-box-shadow: 10px 9px 23px 1px rgba(0, 0, 0, 0.33);
  box-shadow: 10px 9px 23px 1px rgba(0, 0, 0, 0.33);

  .nameDiv {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: max(var(--league-card-font-size), 16px);
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
`;
