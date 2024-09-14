import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;

  height: 6rem;
  width: 100%;

  > img {
    margin-right: 5.6rem;
    height: 3.2rem;
    width: 3.2rem;
  }
`;

export const Nav = styled.nav`
  flex: 1;
  > ul {
    display: flex;
    gap: 3.4rem;

    > li {
      display: inline-block;
      padding: 0.5rem 0;

      > a {
        color: ${({ theme }) => theme.white};
        font-family: "Poppins", sans-serif;
        font-size: 1.6rem;
      }
    }

    :hover {
      color: ${({ theme }) => theme["gray-100"]};
    }

    .active {
      border-bottom: 3px solid ${({ theme }) => theme.white};
      border-radius: 3px;
    }
  }
`;

export const SideNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.2rem;

  > svg {
    color: ${({ theme }) => theme.white};
    cursor: pointer;
    height: 2.5rem;
    width: 2.5rem;

    :hover {
      color: ${({ theme }) => theme["gray-100"]};
    }
  }
`;
