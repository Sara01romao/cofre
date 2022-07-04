import styled from "styled-components";

export const MainCreate = styled.main`
  max-width: 1220px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  height: 100vh;

  div {
    flex: 1;
  }
  .link {
      display: flex;
      justify-content: center;
     
      color: var(--color1);
      &:hover {
        color: var(--color2);
      }
    }

  .infoCreate {
    flex: 1;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    border: 1px solid red;
    

    

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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    
    img{
      border: 1px solid red;
      position: absolute;
      left:10px;
      top: 0px;
     
    }
    h1 {
      text-align: center;
    }

    form {
      flex: 1;
      width: 80%;
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
