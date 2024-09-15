import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  font-family: Poppins, sans-serif;
  font-size: 1.5rem;
  width: 100%;
`;
export const InputStyled = styled.input`
  background: ${({ theme }) => theme.white};
  border: 1px solid ${({ theme }) => theme["gray-400"]};
  border-radius: 10px;
  color: ${({ theme }) => theme.black};
  padding: 2rem;
  width: 100%;

  &::placeholder {
    color: 1px solid ${({ theme }) => theme["gray-400"]};
    font-size: 1.5rem;
  }

  :focus {
    border: 1px solid ${({ theme }) => theme["gray-400"]};
  }
`;
