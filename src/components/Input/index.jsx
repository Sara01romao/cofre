import React from 'react'
import { InpuContainer} from './styles';



export  function Input({typeInput, setChange, value, id, placeholder}) {
  return (
     <InpuContainer>
       <label htmlFor={id}>{id}</label>
        <input
        type={typeInput} 
        id={id}
        onChange={e =>setChange(e.target.value)} value={value}
        placeholder={placeholder}
        required
      />
     </InpuContainer>
     
   
  )
}
