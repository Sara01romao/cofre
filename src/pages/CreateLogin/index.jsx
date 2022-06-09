
import React, { useState } from 'react'
import { Input } from '../../components/Input'
import { MainCreate } from './styles'

export  function CreateLogin() {
  const [name, setName]= useState(null);
  const [email, setEmail]=useState(null);
  return (
    <MainCreate>
      <div>
      <h1>Criar uma conta</h1>
          <div>
            <Input typeInput="text" setChange={setName} value={name} placeholder="Nome "/>
          </div>
      </div>
    </MainCreate>
  )
}
