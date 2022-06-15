import styled from "styled-components";

export const MainCreate = styled.main`

 border: 1px solid red;
 max-width: 1220px;
 margin: 0 auto;
 display: flex;
 align-items: center;
 height: calc(100vh - 79px);

 div{
     flex: 1;
 }
 
.infoCreate{
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;

    p{
        text-align: center;
        font-size: 1.5rem;
        font-weight: 500;
        color: var(--color1);
    }

}

 form{
     flex: 1;
     padding: 30px;
     display: flex;
     flex-direction: column;
     gap: 10px;
 }


`;
