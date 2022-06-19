import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { MainForm } from "./styles";
import { Input } from "../../components/Input";
import { useEffect, useState } from "react";
import PigSvg from "../../components/PigSvg";





export default function Login() {
  const [user, setUser] = useState('')
  const [email, setEmail] = useState('');
  const [passaword, setPassword] = useState('');
  let navigate = useNavigate();


 useEffect(()=>{
   const storageUser= localStorage.getItem('useCofre');
   
   if(storageUser){
     /* navigate('/home') */
     setUser(JSON.parse(storageUser))

   }
  

 },[])

 

  return (
    <MainForm>
       <div className="inputContent">
         
          <h1>Login</h1>
          <form>
          <Input typeInput="text" id="Email" setChange={setEmail} value={email} placeholder="Email"/>
          <Input typeInput="password" id="Senha" setChange={setPassword} value={passaword} placeholder="Senha"/>
          <small><Link to="/">Esqueceu a senha?</Link></small>
          
          <Button txt="Entrar"></Button>
          </form>
     
          <Link to="/createLogin">Criar conta</Link>
         
        
        
      </div>

     <PigSvg/>

    </MainForm>
    
  )
}
