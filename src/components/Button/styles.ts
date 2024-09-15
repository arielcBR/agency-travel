import styled from "styled-components";

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  background: ${({ theme }) => theme["brown-200"]};
  border: none;
  border-radius: 6px;
  color: ${({ theme }) => theme.white};
  cursor: pointer;
  font-family: Poppins, "sans-serif";
  font-weight: 500;
  text-decoration: none;
  padding: 1.2rem;
  white-space: nowrap;
  width: fit-content;

  &:not(:disabled):hover {
    background: ${({ theme }) => theme["brown-100"]};
  }

  &:disabled {
    background: ${({ theme }) => theme["brown-300"]};
    cursor: not-allowed;
    opacity: 0.6;
  }
`;
