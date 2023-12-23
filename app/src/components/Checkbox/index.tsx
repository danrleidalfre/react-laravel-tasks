import { Component } from './styles.ts'
import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  forId: string
  checked: boolean
}

export function Checkbox({ forId, checked, ...props }: InputProps) {
  return (
    <Component>
      <input id={forId} type="checkbox" checked={checked} {...props} />
      <label htmlFor={forId} />
    </Component>
  )
}
