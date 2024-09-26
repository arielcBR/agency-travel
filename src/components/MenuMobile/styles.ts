import styled from "styled-components";
export const MenuMobileContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10000;

  font-family: "Montserrat", sans-serif;
  color: ${({ theme }) => theme.white};
  height: 100vh;
  width: 100%;
`;
export const Header = styled.header`
  display: flex;
  align-items: baseline;
  gap: 1rem;

  background: ${({ theme }) => theme["brown-200"]};

  > div {
    display: flex;
    align-items: center;
    gap: 1rem;

    color: ${({ theme }) => theme.white};
    font-size: 2rem;
    padding: 1.75rem 1.75rem 1.75rem;
    width: calc(50% - 1rem);

    svg {
      cursor: pointer;
      font-size: 2.2rem;
    }
  }
`;

export const Main = styled.div`
  background: ${({ theme }) => theme.white};
  padding-top: 2rem;

  height: 100%;
  width: 100%;

  > nav {
    > ul {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      > li {
        display: flex;
        padding: 0.5rem 0;

        > a {
          color: ${({ theme }) => theme["brown-200"]};
          font-size: 1.8rem;
          font-weight: 500;
        }
      }

      :hover {
        color: ${({ theme }) => theme["gray-100"]};
      }
    }
  }
`;
