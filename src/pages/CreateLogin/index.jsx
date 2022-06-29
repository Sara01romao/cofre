
import React, { useContext, useState } from 'react';
import { Input } from '../../components/Input';
import { MainCreate } from './styles';
import ilustration from '../../assets/images/create.svg'
import Button from '../../components/Button';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/user';

export  function CreateLogin() {
  const [name, setName]= useState('');
  const [email, setEmail]=useState('');
  const [password, setPassword]= useState('');
  const [passwordConfirm, setPasswordConfirm]= useState('');
  const [msgError, setMsgError] = useState(null);
  let navegate = useNavigate();
  const { user, setUser} = useContext(UserContext);

 

  function handleCreate(e){
    e.preventDefault();;
    const usuario ={name:name1, email:email, password:password};
  

   /*  if(password === passwordConfirm ){
      setMsgError(null)
     
       localStorage.setItem('useCofre', JSON.stringify(user)) 
       navegate('/') 

      console.log(user)
    }else{
      setMsgError('Senha inválida')
    } */
   

  }


  return (
    <MainCreate>
     
        <div className='infoCreate'>
         
          <img src={ilustration} alt="ilustração objetivos" />
          <p>Planejamento financeiro <br/>para realizar sonhos</p>
        </div>
     
        <div className='form-content'>
        <h1>Criar uma conta</h1>
        <form onSubmit={handleCreate} >
          <Input typeInput="text" id="Nome" setChange={setName} value={name} placeholder="Nome"/>
          <Input typeInput="text" id="Email" setChange={setEmail} value={email} placeholder="Email"/>
          <Input typeInput="password" id="Senha" setChange={setPassword} value={password} placeholder="Senha"/>
          <Input typeInput="password" id="Confimar Senha" setChange={setPasswordConfirm} value={passwordConfirm} placeholder="Confirma senha"/>
          {msgError?<p style={{color:'red'}}>{msgError}</p>:''}
          <Button txt="Cadastrar"/>
        </form>
        <Link to="/" className="link">Voltar</Link>
         

        </div>
          
            
        
    </MainCreate>
  )
}
