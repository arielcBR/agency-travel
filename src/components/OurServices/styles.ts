import styled from "styled-components";

export const OurServicesContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  
  > h3 {
    color: ${({ theme }) => theme.black};
    font-family: Montserrat, sans-serif;
    font-size: 3.5rem;
    font-weight: 600;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4rem;

  text-align: justify;

  > div {
    display: flex;
    flex-direction: column;
    gap: 6.8rem;
    flex: 1;

    height: 100%;


    > div {
      > h4 {
        margin-bottom: 1rem;
      }

      > ul {
        > li {
          display: flex;
          align-items: center;
          gap: 1rem;

          margin-bottom: 0.5rem;
        }
      }
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
