import * as Dialog from '@radix-ui/react-alert-dialog'
import {
  Actions,
  Cancel,
  Confirm,
  Content,
  Description,
  Overlay,
} from './styles.ts'
import { Check, X } from 'phosphor-react'

interface Props {
  type: 'Tarefa' | 'Tag'

  handleConfirm(): void
}

export function Modal({ type, handleConfirm }: Props) {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Description>Tem certeza que deseja remover essa {type}?</Description>
        <Actions>
          <Cancel>
            <X size={18} weight={'bold'} /> Cancelar
          </Cancel>
          <Confirm onClick={handleConfirm}>
            <Check size={18} weight={'bold'} />
            Remover
          </Confirm>
        </Actions>
      </Content>
    </Dialog.Portal>
  )
}
