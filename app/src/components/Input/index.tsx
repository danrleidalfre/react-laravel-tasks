import { Component } from './styles.ts'
import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ ...props }: InputProps) {
  return (
    <Component>
      <input {...props} />
    </Component>
  )
}
