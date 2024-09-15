import styled from "styled-components";

export const GalleryContainer = styled.section`
  display: flex;
  flex-direction: column;

  margin-bottom: 5rem;
  height: 100vh;
`;

export const GalleryHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  margin-bottom: 2rem;
  text-align: justify;
  width: 65%;

  > h3 {
    color: ${({ theme }) => theme.black};
    font-family: Montserrat, sans-serif;
    font-size: 3rem;
    font-weight: 600;
  }

  > p {
    color: ${({ theme }) => theme["gray-200"]};
    font-family: Poppins, sans-serif;
    font-size: 1.7rem;

    > span {
      font-style: italic;
    }
  }
`;

export const GalleryImages = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  overflow: hidden;
  width: 100vw;

  > img {
    border-radius: 5px;
    box-sizing: border-box;
    height: 25rem;
    object-fit: cover;
    object-position: center;
    width: 20%;
  }

  > img:nth-of-type(3) {
    border-radius: 5px;
    height: 30rem;
  }
`;
