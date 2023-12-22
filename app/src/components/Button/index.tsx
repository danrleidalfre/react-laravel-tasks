import { Component } from './styles.ts'
import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
}

export function Button({ label = 'Add Task', ...props }: ButtonProps) {
  return (
    <Component>
      <button {...props}>{label}</button>
    </Component>
  )
}
