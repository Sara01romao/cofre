import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { MainForm } from "./styles";
import PigImg from "../../assets/images/pig.svg"





export default function Login() {

  function teste(){
  console.log("Sara")
  }

  return (
    <MainForm>
       <div>
        <h1>Login</h1>
        <input type="text" placeholder="Email..."/>
        <input type="text" placeholder="Senha..."/>
        <small>Esqueceu a senha?</small>
        
        <Button txt="Entrar" ></Button>
        <Link to="/createLogin">Criar conta</Link>

      </div>
      <img src={PigImg} alt="Ilustração  cofrinho " />

    </MainForm>
    
  )
}
