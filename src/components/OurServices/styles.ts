import styled from "styled-components";

export const OurServicesContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5rem;

  text-align: justify;

  > div {
    display: flex;
    flex-direction: column;
    gap: 6.8rem;
    flex: 1;

    height: 100%;

    > h3 {
      color: ${({ theme }) => theme.black};
      font-family: Montserrat, sans-serif;
      font-size: 3.5rem;
      font-weight: 600;
    }

    > a {
      height: 5rem;
      width: 19rem;
    }
  }
`;

export const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  color: #373737;
  font-family: Poppins, sans-serif;
  font-size: 1.7rem;
  width: 60%;
`;
export const Carrousel = styled.div``;
