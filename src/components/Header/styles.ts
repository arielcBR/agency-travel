import styled from "styled-components";
import { DEVICE_BREAKPOINT } from "../../styles/devicesBreakpoint";

export const HeaderContainer = styled.header`
  width: 100%;
`;

export const HeaderDesktop = styled.div`
  display: flex;
  align-items: center;

  border-bottom: 1px solid ${({ theme }) => theme["gray-300"]};
  width: 100%;

  > img {
    margin-right: 5.6rem;
    height: 3.2rem;
    width: 3.2rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINT.SM}) {
      display: none;
  }
`;

export const Nav = styled.nav`
  flex: 1;
  > ul {
    display: flex;
    gap: 3.4rem;

    > li {
      display: inline-block;
      padding: 1.5rem 0;

      > a {
        color: ${({ theme }) => theme.white};
        font-family: "Poppins", sans-serif;
        font-size: 1.6rem;
      }
    }

    :hover {
      color: ${({ theme }) => theme["gray-100"]};
    }
  }
`;

export const HeaderMobile = styled.div`
  display: flex;
  align-items: center;
  padding-top: 1.5rem;

  > div {
    width: 50%;
  }

  svg,
  img {
    color: ${({ theme }) => theme.white};
    height: 3rem;
    width: 3rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINT.MD}) {
    display: none;
  }
`;
