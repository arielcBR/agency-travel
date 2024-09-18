import styled from "styled-components";
import imageBg from "../../assets/images/caminito.jpg";

export const HeroSectionContainer = styled.section`
  background-image: url(${imageBg});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;

  margin-bottom: 8rem;
  position: relative;

  > main {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 3.7rem;

    color: ${({ theme }) => theme.white};
    width: 60rem;

    position: absolute;
    top: 40%;

    > h1 {
      font-family: "Montserrat", sans-serif;
      font-size: 8rem;
      font-weight: 600;
      text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
        1px 1px 0 #000;
    }

    > p {
      font-family: "Poppins", system-ui;
      font-size: 1.8rem;
      font-weight: 700;
      text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
        1px 1px 0 #000;
    }
  }
`;
