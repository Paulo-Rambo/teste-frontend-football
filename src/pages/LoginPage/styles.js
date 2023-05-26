import styled from "styled-components";

export const MainLoginStyle = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .loginDivBox {
    width: max(min(90%, 450px), 38vw);
    height: max(440px, 44vw);
    background-color: var(--color-year);
    border-radius: var(--border-radius2);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
`;
