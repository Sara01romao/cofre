import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { MainForm } from "./styles";
import { Input } from "../../components/Input";
import { useState } from "react";
import PigSvg from "../../components/PigSvg";





export default function Login() {
  const [email, setEmail] = useState('');
  const [passaword, setPassword] = useState('');


  return (
    <MainForm>
       <div className="inputContent">
         
          <h1>Login</h1>
          <Input typeInput="text" id="Email" setChange={setEmail} value={email} placeholder="Email"/>
          <Input typeInput="password" id="Senha" setChange={setPassword} value={passaword} placeholder="Senha"/>
          <small><Link to="/">Esqueceu a senha?</Link></small>
          
          <Button txt="Entrar"></Button>
          <Link to="/createLogin">Criar conta</Link>
         
        
        
      </div>

     <PigSvg/>

    </MainForm>
    
  )
}
