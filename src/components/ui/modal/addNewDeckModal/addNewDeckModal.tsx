import { FC, ReactNode, useState } from 'react'

import { Button } from '../../button'
import { ControlledCheckbox, ControlledInput } from '../../controlled'
import { Typography } from '../../typography'
import { Modal } from '../modal.tsx'

import s from './addNewDeckModal.module.scss'
import { useAddNewDeckForm } from './useAddNewDeckForm.ts'

type AddNewDeckPropsType = {
  width: 'narrow' | 'wide'
  trigger: ReactNode
}
export const AddNewDeckModal: FC<AddNewDeckPropsType> = ({ width, trigger }) => {
  const [isOpen, setIsOpen] = useState(false)
  const onOpenChange = () => setIsOpen(!isOpen)

  const { handleSubmit, control, reset } = useAddNewDeckForm()
  const onSubmit = handleSubmit(data => {
    reset()
    console.log(data)
    setIsOpen(false)
  })

  return (
    <Modal.Root
      width={width}
      title={'Add New Deck'}
      trigger={trigger}
      isOpen={isOpen}
      onOpenChange={onOpenChange}
    >
      <form onSubmit={onSubmit}>
        <Modal.Body>
          <ControlledInput
            id="newDeck"
            label="Deck Name"
            control={control}
            name="newDeck"
            placeholder={'Name'}
          />
          <ControlledCheckbox label={'Private deck'} name={'isPrivate'} control={control} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant={'primary'} type={'submit'}>
            <Typography variant={'subtitle2'} className={s.button_text}>
              Add New Deck
            </Typography>
          </Button>
          <Button variant={'secondary'} onClick={() => setIsOpen(false)}>
            <Typography variant={'subtitle2'} className={s.button_text}>
              Cancel
            </Typography>
          </Button>
        </Modal.Footer>
      </form>
    </Modal.Root>
  )
}
