import { FC } from 'react'
import { IButtonProps } from '../../Interfaces/Interface'

const Button:FC<IButtonProps> = ({onClick, children}) => {
  return (
    <button onClick={onClick}>{children}</button>
  )
}

export default Button