import { FC, ReactNode, useState } from 'react'

import { Button } from '../../button'
import { ControlledInput } from '../../controlled'
import { Select } from '../../select'
import { Typography } from '../../typography'
import { Modal } from '../modal.tsx'

import { useAddNewCardForm } from './useAddNewCardForm.ts'

type AddNewCardModalPropsType = {
  width: 'narrow' | 'wide'
  trigger: ReactNode
}
export const AddNewCardModal: FC<AddNewCardModalPropsType> = ({ width, trigger }) => {
  const [isOpen, setIsOpen] = useState(false)
  const onOpenChange = () => setIsOpen(!isOpen)

  const { handleSubmit, control, reset } = useAddNewCardForm()
  const onSubmit = handleSubmit(data => {
    reset()
    console.log(data)
    setIsOpen(false)
  })

  //test
  return (
    <Modal.Root
      width={width}
      title={'Add New Card'}
      trigger={trigger}
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      isSeparator={false}
    >
      <form onSubmit={onSubmit}>
        <Modal.Body>
          <Select
            id={'selectFormat'}
            label={'Choose a question format'}
            ariaLabel={'Choose a question format'}
            selectItems={[
              { id: '1', value: 'text', title: 'Text', disabled: false },
              { id: '2', value: 'picture', title: 'Picture', disabled: false },
            ]}
            callback={() => {}}
            size={'large'}
            isFullWidth={true}
          />
          <ControlledInput
            id="question"
            label="Question"
            control={control}
            name="question"
            placeholder={'Question'}
          />
          <ControlledInput
            id="answer"
            label="Answer"
            control={control}
            name="answer"
            placeholder={'Answer'}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant={'primary'} type={'submit'}>
            <Typography variant={'subtitle2'}>Delete Card</Typography>
          </Button>
          <Button variant={'secondary'} onClick={() => setIsOpen(false)}>
            <Typography variant={'subtitle2'}>Cancel</Typography>
          </Button>
        </Modal.Footer>
      </form>
    </Modal.Root>
  )
}
