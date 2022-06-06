import React from 'react'
import { Btn } from './styles';




export default function Button({txt , btnClick}) {
  return (
    <Btn onClick={btnClick}>
         {txt}
    </Btn>
    
  )
}
