import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { MainForm } from "./styles";
import PigImg from "../../assets/images/pig.svg"
import { Input } from "../../components/Input";
import { useState } from "react";





export default function Login() {
  const [email, setEmail] = useState('');
  const [passaword, setPassword] = useState('');


  return (
    <MainForm>
       <div>
        <h1>Login</h1>
        <Input typeInput="text" id="email" setChange={setEmail} value={email} placeholder="Email"/>
        <Input typeInput="password" id="password" setChange={setPassword} value={passaword} placeholder="Senha"/>
        <small>Esqueceu a senha?</small>
        
        <Button txt="Entrar" ></Button>
        <Link to="/createLogin">Criar conta</Link>
        {email}
      </div>
      <img src={PigImg} alt="Ilustração  cofrinho " />

    </MainForm>
    
  )
}
