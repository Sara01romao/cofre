import styled from "styled-components";

export const Btn = styled.button`
  height: 40px;
  max-width: 100%;
  background: var(--color1);
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  transition: 0.8s;
  &:hover {
    background: var(--color2);
  }
`;
