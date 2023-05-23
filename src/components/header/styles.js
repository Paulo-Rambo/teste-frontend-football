import styled from "styled-components";

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  background-color: #e1f6ff;
  margin-left: 8rem;
  margin-right: 8rem;

  .alignPosition1 {
    height: 80px;
    display: flex;
    flex-direction: column;

    justify-content: center;
  }
  .alignPosition {
    height: 4rem;
    font-size: 2rem;
  }
  .logoutButton {
    border-style: none;
    padding: 1rem;
    font-size: 1.4rem;
    border-radius: 16px;
    cursor: pointer;
  }
`;
