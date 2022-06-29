import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { MainForm } from "./styles";
import { Input } from "../../components/Input";
import { useContext, useEffect, useState } from "react";
import PigSvg from "../../components/PigSvg";
import { UserContext } from "../../context/user";






export default function Login() {
  const {userData, setUserData} = useContext(UserContext)
  const [user, setUser] = useState('')
  const [email, setEmail] = useState('');
  const [passaword, setPassword] = useState('');
  let navigate = useNavigate();


/*  useEffect(()=>{
   const storageUser= localStorage.getItem('useCofre');
   
   if(storageUser){
     
     setUser(JSON.parse(storageUser))

   }
  

 },[]) */


 function handleSubmit(e){
   e.preventDefault
    navigate('/home')
 }

 

  return (
    <MainForm>
       <div className="inputContent">
         
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <Input typeInput="text" id="Email" setChange={setEmail} value={email} placeholder="Email"/>
            <Input typeInput="password" id="Senha" setChange={setPassword} value={passaword} placeholder="Senha"/>
            <small><Link to="/">Esqueceu a senha?</Link></small>
            
            <Button onClick={e => setName("sara")} txt="Entrar"></Button>
          </form>
         
          <Link to="/createLogin" className="link">Criar conta</Link>
         
       
        {userData != null? userData.name : ''}
      </div>

     <PigSvg/>

    </MainForm>
    
  )
}
