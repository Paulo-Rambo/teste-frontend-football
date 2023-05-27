import styled from "styled-components";

export const MainLoginStyle = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .loginDivBox {
    width: max(min(90%, 380px), 38vw);
    height: max(350px, 33vw);
    background-color: var(--color-1);
    border-radius: var(--border-radius2);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border: solid max(1px, 0.1vw);
  }
`;
