import styled from "styled-components";

export const OurStaffContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 6rem;

  margin-bottom: 6rem;
  width: 100%;
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  align-self: flex-end;

  text-align: justify;
  width: 50%;

  > h4 {
    color: ${({ theme }) => theme.black};
    font-family: Montserrat, sans-serif;
    font-size: 2.5rem;
    font-weight: 600;
  }
`;

export const Staff = styled.div`
  display: grid;
  grid-template-columns: 45% 27.5% 27.5%;
  column-gap: 2.5rem;
  justify-content: space-between;

  height: 39rem;
  width: 100%;
`;

export const StafCardfWithDescription = styled.div`
  display: flex;
  align-items: center;

  border-radius: 10px;
  overflow: hidden;
  height: 100%;
`;

interface CardImageProps {
  image: string;
}

export const CardImage = styled.div<CardImageProps>`
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  width: 50%;
`;

export const CardDescription = styled.div`
  background-color: ${({ theme }) => theme["brown-200"]};
  padding: 1.9rem 1rem;
  height: 100%;
  width: 50%;

  > h4 {
    color: ${({ theme }) => theme.white};
    font-family: Montserrat, sans-serif;
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1rem;
    text-transform: capitalize;
  }

  > p {
    color: ${({ theme }) => theme.white};
    font-family: Poppins, sans-serif;
    font-size: 1.3rem;
    margin-bottom: 1rem;
    text-align: justify;

    > span {
      font-weight: 500;
    }
  }
`;

export const StaffCardSimple = styled(CardImage)`
  border-radius: 10px;
  position: relative;
  height: 100%;
  width: 100%;

  > span {
    position: absolute;
    left: 50%;
    bottom: 2.5rem;
    transform: translateX(-50%);

    color: ${({ theme }) => theme.white};
    font-family: Montserrat, sans-serif;
    font-size: 2rem;
    font-weight: 500;
    text-align: center;
    text-transform: capitalize;
    white-space: nowrap;
    z-index: 10;
  }
`;
