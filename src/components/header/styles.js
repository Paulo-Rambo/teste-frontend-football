import styled from "styled-components";

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: max(7vw, 80px);
  background-color: #e1f6ff;
  margin-bottom: 2vw;

  .headerAlign {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 8vw;
    margin-right: 8vw;
  }
  .alignPosition1 {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    align-items: center;
  }
  .alignPosition {
    margin: 0;
    padding: 0;

    font-size: max(2.4vw, 28px);
  }
  .logoutButton {
    padding: max(1vw, 10px);
    font-size: max(1.4vw, 22px);
    border-radius: max(1vw, 16px);
    cursor: pointer;
    border: solid 2px;
    border-color: grey;
    border-top: 0px;
    border-left: 0px;
  }
`;
