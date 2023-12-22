import { Component } from './styles.ts'
import { ButtonHTMLAttributes } from 'react'
import { CheckCircle, PlusCircle } from 'phosphor-react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isEdit?: boolean
}

export function Button({ isEdit = false, ...props }: ButtonProps) {
  return (
    <Component>
      <button {...props}>
        {isEdit && <CheckCircle size={20} weight={'bold'} />}
        {!isEdit && <PlusCircle size={20} weight={'bold'} />}
        <span>{isEdit ? 'Salvar' : 'Adicionar'}</span>
      </button>
    </Component>
  )
}
