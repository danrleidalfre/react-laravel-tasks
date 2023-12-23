import { Button, IconEdit, IconRemove } from './styles.ts'
import { ButtonHTMLAttributes } from 'react'
import { Pen, Trash } from 'phosphor-react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isEdit?: boolean
}

export function ButtonFlat({ isEdit = true, ...props }: ButtonProps) {
  return (
    <Button type="button" {...props}>
      {isEdit && (
        <IconEdit>
          <Pen size={20} />
        </IconEdit>
      )}
      {!isEdit && (
        <IconRemove>
          <Trash size={20} />
        </IconRemove>
      )}
    </Button>
  )
}
