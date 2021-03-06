import styled from "styled-components";

export const MainForm = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  align-items: center;
  position: relative;
  .inputContent {
    padding: 0px 2px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   
  }

  .logo{
    
    position: absolute;
    top:0px;
    left: 10px;
    
  }

  form {
    margin-top: 20px;
    max-width: 80%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
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

  form small {
      position: relative;
      top: -15px;
      font-size: 16px;
      color: #fd0000;
    }


  svg {
    max-width: 400px;
    display: block;
    margin: 0 auto;
  }

  @media screen and (max-width: 767px) {
    display: flex;
    align-content: center;
    justify-content: center;
    .inputContent {
      padding: 0px 10px;
    }

    form {
      max-width: 100%;
      width: 100%;
    }
    svg {
      display: none;
    }
  }

`;
