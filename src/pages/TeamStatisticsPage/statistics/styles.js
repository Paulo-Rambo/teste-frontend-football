import styled from "styled-components";

export const GraphicsDiv = styled.div`
  box-sizing: border-box;
  width: 80vw;
  margin-bottom: 10vw;
`;

export const TableStyle = styled.table`
  box-sizing: border-box;
  width: 100%;
  border: solid 1px;
  margin: 0px;

  border-top-right-radius: max(16px, 2vw);
  border-top-left-radius: max(16px, 2vw);

  th {
    box-sizing: border-box;
    width: 250px;
    height: 4vw;
  }
  .celNameStyle {
    font-size: max(18px, 2vw);
  }
  td {
    box-sizing: border-box;
    text-align: center;
    height: 4vw;
    font-size: max(18px, 2vw);
  }
  thead {
    box-sizing: border-box;
    height: 6vw;
    font-size: max(22px, 2.4vw);
  }
  .tableTitleStyle {
    box-sizing: border-box;
    background: linear-gradient(
      to left,
      rgba(0, 255, 115, 0.9948354341736695) 0%,
      rgba(0, 255, 115, 0.3) 100%
    );
    border-top-right-radius: max(16px, 2vw);
    border-top-left-radius: max(16px, 2vw);
  }
`;

export const GraphicStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  border-top-right-radius: max(16px, 2vw);
  border-top-left-radius: max(16px, 2vw);
  border: solid 1px;

  .candleDiv {
    background: linear-gradient(
      180deg,
      rgba(0, 255, 115, 0.9948354341736695) 0%,
      rgba(0, 255, 115, 0.3) 100%
    );
    width: max(35px, 6vw);
  }
  .percentageSpan {
    font-size: max(12px, 2vw);
  }
  ul {
    height: 30vw;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: solid 1px;
  }
  li {
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  .timeSpan {
    width: 180%;
    position: absolute;
    bottom: min(-3vw, -15px);
    font-size: max(10px, 2vw);
  }
`;

export const GraphicBox = styled.div`
  width: 100%;

  h3 {
    font-size: max(16px, 2vw);
    font-weight: 400;
    text-align: center;
    margin-top: max(1vw, 15px);
    margin-bottom: max(0.6vw, 5px);
  }
`;

export const FormationDivBox = styled.div`
  margin-top: max(20px, 1.5vw);
  margin-bottom: max(20px, 1.5vw);
  h3 {
    font-size: max(16px, 2vw);
    font-weight: 400;
  }
  .formationBorderStyle h3 {
    font-weight: 600;
  }
  .formation {
    font-size: max(16px, 2vw);
    color: rgba(0, 134, 11, 1);
    font-weight: 800;
  }
  .formationBorderStyle {
    padding-top: max(10px, 0.5vw);
    padding-bottom: max(10px, 0.5vw);
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border: solid 1px;
    border-bottom-right-radius: max(16px, 2vw);
    border-top-right-radius: max(16px, 2vw);
    height: max(14vw, 120px);
    width: max(24vw, 200px);
    display: flex;
    background: linear-gradient(
      to left,
      rgba(0, 255, 115, 0.3) 0%,
      rgba(0, 255, 115, 0) 100%
    );
  }
  .quantity {
    font-size: max(18px, 2vw);
  }
  .formationTitle {
    margin-top: 2vw;
    margin-bottom: 1vw;
  }
`;
