
import React, { useState } from 'react';
import { Input } from '../../components/Input';
import { MainCreate } from './styles';
import ilustration from '../../assets/images/create.svg'
import Button from '../../components/Button';

export  function CreateLogin() {
  const [name, setName]= useState('');
  const [email, setEmail]=useState('');
  const [password, setPassword]= useState('');
  const [passwordConfirm, setPasswordConfirm]= useState('');

  function handleCreate(event){
    event.preventDefault();
    const user =[{name:name, email:email, password:password}];
    console.log(user)

    localStorage.setItem('useCofre', JSON.stringify(user))
   

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
{/*           <Input typeInput="password" id="Confimar Senha" setChange={setPasswordConfirm} value={passwordConfirm} placeholder="Confirma senha"/>
 */}          
          <Button txt="Cadastrar"/>
        </form>
        </div>
          
            
        
    </MainCreate>
  )
}
