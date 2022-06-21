import styled from "styled-components";

export const MainForm = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: calc(100vh - 79px);
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    gap: 12px;

    
  }

  .link {
      display: flex;
      justify-content: center;
      margin-top: 30px;
      color: var(--color1);
      &:hover {
        color: var(--color2);
      }
    }

  svg {
    max-width: 400px;
    display: block;
    margin: 0 auto;
  }

  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
    .inputContent{
      padding: 0px 10px;
    }
    svg {
      display: none;
    }
  }
`;
