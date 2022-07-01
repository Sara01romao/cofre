import styled from "styled-components";

export const MainCreate = styled.main`
  max-width: 1220px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  height: calc(100vh - 79px);

  div {
    flex: 1;
  }
  .link {
      display: flex;
      justify-content: center;
      margin-bottom: 50px;
      color: var(--color1);
      &:hover {
        color: var(--color2);
      }
    }

  .infoCreate {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
        max-width: 400px;
        height: 400px;
    }

    p {
      text-align: center;
      font-size: 1.5rem;
      font-weight: 500;
      color: var(--color1);
    }
  }

  .form-content {
    h1 {
      text-align: center;
    }

    form {
      flex: 1;
      padding: 30px 30px 15px;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    form small{
      position: relative;
      top: -15px;
      font-size: 16px;
      color: #fd0000;
    }
  }

  @media screen and (max-width: 767px) {
    height: auto;
    .infoCreate {
      display: none;
    }
  }
`;
