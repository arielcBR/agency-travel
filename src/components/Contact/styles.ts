import styled from "styled-components"

export const ContactContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;

  margin-bottom: 3rem;
  overflow: hidden;
  width: 100%;

  > div:nth-child(1) {
    height: 100%;
    
    > img {
      border-radius: 15px;
      height: 30rem;
      width: 35rem;
    }
  }

  > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    > h3 {
      color: ${({ theme }) => theme.black};
      font-family: Montserrat, sans-serif;
      font-size: 2.5rem;
      font-weight: 600;
      text-transform: capitalize;
      text-align: center;
    }
  }
`;