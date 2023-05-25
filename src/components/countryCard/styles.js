import styled from "styled-components";

export const Card = styled.div`
  width: 15vw;
  height: 15vw;
  min-height: 150px;
  min-width: 150px;

  margin: 2vw;
  border: solid 3px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: max(1vw, 10px);
  cursor: pointer;
  border-radius: var(--card-radius-1);
  border: solid 0.1px;
  background-color: var(--color-country);
  border-color: var(--color-border-card-1);
  font-weight: 600;
  -webkit-box-shadow: 10px 9px 23px 1px rgba(0, 0, 0, 0.33);
  -moz-box-shadow: 10px 9px 23px 1px rgba(0, 0, 0, 0.33);
  box-shadow: 10px 9px 23px 1px rgba(0, 0, 0, 0.33);

  .nameDiv {
    display: flex;
    justify-content: space-between;
    font-size: max(var(--country-card-font-size), 16px);
  }
  .imgBox {
    width: 100%;
    height: 12vw;
    min-height: 80px;
    min-width: 80px;
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
