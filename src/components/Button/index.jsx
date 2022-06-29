import React from 'react'
import { Btn } from './styles';




export default function Button({txt , btnClick, typeBtn}) {
  return (
    <Btn type={typeBtn} onClick={btnClick}>
         {txt}
    </Btn>
    
  )
}
