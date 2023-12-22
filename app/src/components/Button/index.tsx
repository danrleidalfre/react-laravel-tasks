import { Component } from './styles.ts'
import { ButtonHTMLAttributes } from 'react'
import { PlusCircle } from 'phosphor-react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ ...props }: ButtonProps) {
  return (
    <Component>
      <button {...props}>
        <PlusCircle size={20} weight={'bold'} />
        <span>Adicionar</span>
      </button>
    </Component>
  )
}
