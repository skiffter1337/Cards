import { FC, ReactNode, useState } from 'react'

import { Button } from '../../button'
import { ControlledCheckbox, ControlledInput } from '../../controlled'
import { Typography } from '../../typography'
import { Modal } from '../modal.tsx'

import { useEditDeckForm } from './useEditDeckForm.ts'

type EditDeckModalPropsType = {
  width: 'narrow' | 'wide'
  trigger: ReactNode
}
export const EditDeckModal: FC<EditDeckModalPropsType> = ({ width, trigger }) => {
  const [isOpen, setIsOpen] = useState(false)
  const onOpenChange = () => setIsOpen(!isOpen)

  const { handleSubmit, control, reset } = useEditDeckForm()
  const onSubmit = handleSubmit(data => {
    reset()
    console.log(data)
    setIsOpen(false)
  })

  return (
    <Modal.Root
      width={width}
      title={'Edit Deck'}
      trigger={trigger}
      isOpen={isOpen}
      onOpenChange={onOpenChange}
    >
      <form onSubmit={onSubmit}>
        <Modal.Body>
          <ControlledInput
            id="editDeck"
            label="Deck Name"
            control={control}
            name="editDeck"
            placeholder={'Name'}
          />
          <ControlledCheckbox label={'Private deck'} name={'isPrivate'} control={control} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant={'primary'} type={'submit'}>
            <Typography variant={'subtitle2'}>Add New Deck</Typography>
          </Button>
          <Button variant={'secondary'} onClick={() => setIsOpen(false)}>
            <Typography variant={'subtitle2'}>Cancel</Typography>
          </Button>
        </Modal.Footer>
      </form>
    </Modal.Root>
  )
}
