import styled from "styled-components";

export const GraphicsDiv = styled.div`
  width: 100%;
`;

export const TableStyle = styled.table`
  width: 78vw;

  th {
    background-color: beige;
    width: 250px;
    height: 4vw;
  }
  td {
    text-align: center;
    height: 4vw;
    border: solid 1px;
  }
  thead {
    height: 6vw;
  }
`;

export const GraphicStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .candleDiv {
    background-color: red;
    width: 50px;
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
    bottom: -2vw;
  }
`;
