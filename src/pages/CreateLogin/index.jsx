
import React, { useState } from 'react'
import { Input } from '../../components/Input'
import { MainCreate } from './styles'

export  function CreateLogin() {
  const [name, setName]= useState(null);
  const [email, setEmail]=useState(null);
  const [password, setPassword]= useState(null);
  return (
    <MainCreate>
      <div>
      <h1>Criar uma conta</h1>
          <div>
            <Input typeInput="text" id="Nome" setChange={setName} value={name} placeholder="Email"/>
            <Input typeInput="text" id="Email" setChange={setEmail} value={email} placeholder="Email"/>
            <Input typeInput="password" id="Senha" setChange={setPassword} value={password} placeholder="Senha"/>
          </div>
      </div>
    </MainCreate>
  )
}
