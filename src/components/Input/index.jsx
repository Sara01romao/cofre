import React from 'react'
import { InpuStyle } from './styles';



export  function Input({typeInput, setChange, value, id, placeholder}) {
  return (
      <InpuStyle
        type={typeInput} 
        id={id}
        onChange={e =>setChange(e.target.value)} value={value}
        placeholder={placeholder}
      />
   
  )
}
