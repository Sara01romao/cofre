import styled from "styled-components";

/* export const Teste = styled.button`
    background: red;



`; */

export const MainForm = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: calc(100vh - 70px);
  align-items: center;
 

  div {
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 30px;
  }

  img{
    max-width: 400px;
    display: block;
    margin: 0 auto;
  }
`;
