import styled from "styled-components";

export const LogoutButton = styled.button`
  padding: max(1vw, 10px);
  font-size: max(1.4vw, 22px);
  border-radius: max(1vw, 16px);
  cursor: pointer;
  border: solid 2px;
  border-color: grey;
  border-top: 0px;
  border-left: 0px;

  :active {
    border: solid 0px;
  }
`;

export const SelectButton = styled.button`
  border-style: none;
  padding: 0.5vw;
  font-size: max(1.3vw, 15px);
  border-radius: 1vw;
  margin: 10px;
  cursor: pointer;
  min-height: 35px;
  min-width: 80px;
`;
