import React from 'react'
import { InpuStyle } from './styles';

interface InputProps{
    typeInput: string;
    value:string;
    setChange:React.Dispatch<React.SetStateAction<string>>;
    id: string;
    placeholder:string;
    
}

export  function Input({typeInput, setChange, value, id, placeholder}:InputProps) {
  return (
      <InpuStyle
        type={typeInput} 
        id={id}
        onChange={e =>setChange(e.target.value)} value={value}
        placeholder={placeholder}
      />
   
  )
}
