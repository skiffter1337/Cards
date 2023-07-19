import { FC, ReactNode, useState } from 'react'

import { Button } from '../../button'
import { Typography } from '../../typography'
import { Modal } from '../modal.tsx'

import s from './deleteCardModal.module.scss'

type DeleteDeckModalPropsType = {
  width: 'narrow' | 'wide'
  trigger: ReactNode
  deleteCard?: () => void
}
export const DeleteCardModal: FC<DeleteDeckModalPropsType> = ({ width, trigger }) => {
  const [isOpen, setIsOpen] = useState(false)
  const onOpenChange = () => setIsOpen(!isOpen)

  return (
    <Modal.Root
      width={width}
      title={'Delete Card'}
      trigger={trigger}
      isOpen={isOpen}
      onOpenChange={onOpenChange}
    >
      <Modal.Body>
        <Typography variant={'body1'} className={s.text}>
          Do you really want to remove <b>Card Name?</b>
          <br />
          {'All cards will be deleted.'}
        </Typography>
      </Modal.Body>
      <Modal.Footer>
        <Button variant={'primary'} onClick={() => {}}>
          <Typography variant={'subtitle2'}>Delete Card</Typography>
        </Button>
        <Button variant={'secondary'} onClick={() => setIsOpen(false)}>
          <Typography variant={'subtitle2'}>Cancel</Typography>
        </Button>
      </Modal.Footer>
    </Modal.Root>
  )
}
