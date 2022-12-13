import { FC, useEffect, useRef } from 'react'
import {IInputProps} from './../../Interfaces/Interface';

const Input:FC<IInputProps> = ({value, onChange}) => {
  //reference for the input
  const inputRef = useRef<HTMLInputElement>(null);

  //focus on input on render
  useEffect(()=>{
    if (inputRef.current) {
      inputRef.current.focus();
    }
  },[])

  return (
    <input type="text" value={value} onChange={(e) =>onChange(e.target.value)} ref={inputRef}/>
  )
}

export default Input