import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { MainForm } from "./styles";
import { Input } from "../../components/Input";
import { useContext, useState } from "react";
import PigSvg from "../../components/PigSvg";
import Logo from "../../assets/images/logo.svg"
import { UserContext } from "../../context/user";
import Loading from "../../components/Loading";



export default function Login() {
  const {userData, setUserData} = useContext(UserContext)
  const [user, setUser] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ msgError, setMsgError] = useState(null);
  let navigate = useNavigate();
  const [loding, setLoding] = useState(false);

 function handleSubmit(e){
   e.preventDefault()
  setLoding(true);
  if(userData !== null){
    if(userData.email === email && userData.password === password){
      setMsgError(null)
      setLoding(false);
     /*  navigate('/home')   */
    }else if(userData.email != email || userData.password !== password){
      setMsgError('Email ou senha incorretos')
      setLoding(false);
    }
  }else{
    setMsgError('Usuário não existe')
    setLoding(false);
  }

  
 }

 

  return (
    <MainForm>
      {loding ==! false ?
      <>
          <Loading/> 
          <div className="inputContent">
          <img className="logo" src={Logo} alt="logo"/>
              <h1>Login</h1>
              <form onSubmit={handleSubmit}>
                <Input typeInput="text" id="Email" setChange={setEmail} value={email} placeholder="Email"/>
                <Input typeInput="password" id="Senha" setChange={setPassword} value={password} placeholder="Senha"/>
                <small>
                  {msgError != null ? msgError:''}
                </small>
                <small>
                  <Link to="/">Esqueceu a senha?</Link>
                </small>
                
                <Button onClick={e => setName("sara")} txt="Entrar"></Button>
              </form>
            
              <Link to="/createLogin" className="link">Criar conta</Link>
            
          </div>

          <div clasName="msgsContent">
          
            <PigSvg/>
          </div>
      
      </>
      :

      <>
          <div className="inputContent">
          <img className="logo" src={Logo} alt="logo"/>
              <h1>Login</h1>
              <form onSubmit={handleSubmit}>
                <Input typeInput="text" id="Email" setChange={setEmail} value={email} placeholder="Email"/>
                <Input typeInput="password" id="Senha" setChange={setPassword} value={password} placeholder="Senha"/>
                <small>
                  {msgError != null ? msgError:''}
                </small>
                <small>
                  <Link to="/">Esqueceu a senha?</Link>
                </small>
                
                <Button onClick={e => setName("sara")} txt="Entrar"></Button>
              </form>
            
              <Link to="/createLogin" className="link">Criar conta</Link>
            
          </div>

          <div clasName="msgsContent">
          
            <PigSvg/>
          </div>
      </>
      
      
      }
      
      
     
    </MainForm>
    
  )
}
