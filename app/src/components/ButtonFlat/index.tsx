import { ButtonHTMLAttributes, forwardRef } from 'react'
import { Button, IconEdit, IconRemove } from './styles.ts'
import { Pen, Trash } from 'phosphor-react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isEdit?: boolean
}

const ButtonFlat = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { isEdit = true, ...rest } = props

  return (
    <Button type="button" ref={ref} {...rest}>
      {isEdit && (
        <IconEdit
          data-tooltip-id="tooltip"
          data-tooltip-content="Editar"
          data-tooltip-variant="light"
        >
          <Pen size={20} />
        </IconEdit>
      )}
      {!isEdit && (
        <IconRemove
          data-tooltip-id="tooltip"
          data-tooltip-content="Remover"
          data-tooltip-variant="light"
        >
          <Trash size={20} />
        </IconRemove>
      )}
    </Button>
  )
})

ButtonFlat.displayName = 'ButtonFlat'
export default ButtonFlat
