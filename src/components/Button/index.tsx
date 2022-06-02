import React from 'react'
import { Btn } from './styles';


interface ButtonProps{
   txt:String;
   btnClick?: () => void;
}

export default function Button({txt , btnClick}:ButtonProps) {
  return (
    <Btn onClick={btnClick}>
         {txt}
    </Btn>
    
  )
}
