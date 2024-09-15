import styled from "styled-components"

export const FormContactContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  max-width: 38rem;

> button {
  width: 12rem;
}
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  width: 100%;

  & input,
  select {
    height: 3rem;
  }

  & textarea {
    height: 10.75rem;
  }
`;

export const ContactInfoSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;

  > div:nth-child(1) {
    width: 6rem;
  }

  > div:nth-child(2) {
    width: 40%;
  }
`;

export const TripDetailsSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  gap: 2rem;

  > div:nth-child(1) {
    width: 15rem;
  }

  > div:nth-child(2) {
    width: 10rem;
  }
`;