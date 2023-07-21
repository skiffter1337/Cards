import { FC, ReactNode, useState } from 'react'

import { useImageUploader } from '../../../../hooks/useImageUploader'
import { ImageOutlined } from '../../../../images/svg/icons/imageOutlined'
import { Button } from '../../button'
import { ControlledInput } from '../../controlled'
import { Select } from '../../select'
import { Typography } from '../../typography'
import { Modal } from '../modal.tsx'

import s from './editCardModal.module.scss'
import { useEditCardForm } from './useEditCardForm.ts'

type EditCardModalPropsType = {
  width: 'narrow' | 'wide'
  trigger: ReactNode
}
export const EditCardModal: FC<EditCardModalPropsType> = ({ width, trigger }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [questionFormat, setQuestionFormat] = useState('text')
  const onOpenChange = () => setIsOpen(!isOpen)

  const { handleSubmit, control, reset } = useEditCardForm()
  const onSubmit = handleSubmit(data => {
    reset()
    console.log(data)
    setIsOpen(false)
  })

  const changeQuestionFormat = (option: string) => {
    setQuestionFormat(option)
    console.log(option)
  }

  const modalVariant =
    questionFormat === 'text' ? (
      <>
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
      </>
    ) : (
      <ImageUploader />
    )

  return (
    <Modal.Root
      width={width}
      title={'Edit Card'}
      trigger={trigger}
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      isSeparator={questionFormat !== 'text'}
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
            onSelect={changeQuestionFormat}
            size={'large'}
            isFullWidth={true}
            defaultValue={questionFormat}
          />
          {modalVariant}
        </Modal.Body>
        <Modal.Footer>
          <Button variant={'primary'} type={'submit'}>
            <Typography variant={'subtitle2'}>Save Changes</Typography>
          </Button>
          <Button variant={'secondary'} onClick={() => setIsOpen(false)}>
            <Typography variant={'subtitle2'}>Cancel</Typography>
          </Button>
        </Modal.Footer>
      </form>
    </Modal.Root>
  )
}

const ImageUploader = () => {
  const {
    image: questionImage,
    errors: questionErrors,
    onImageChange: onQuestionImageChange,
    fileInputRef: questionFileInputRef,
    handleButtonClick: handleQuestionButtonClick,
  } = useImageUploader()

  const {
    image: answerImage,
    errors: answerErrors,
    onImageChange: onAnswerImageChange,
    fileInputRef: answerFileInputRef,
    handleButtonClick: handleAnswerButtonClick,
  } = useImageUploader()

  return (
    <>
      <Typography variant={'subtitle2'} className={s.title}>
        Question:
      </Typography>
      {questionImage && <img src={questionImage} className={s.image} />}
      <Button
        variant={'secondary'}
        className={s.button}
        fullWidth={true}
        onClick={handleQuestionButtonClick}
      >
        <Typography variant={'subtitle2'} className={s.button_text}>
          <ImageOutlined /> Change Cover
        </Typography>
      </Button>
      {questionErrors['questionFile'] && (
        <Typography variant={'body2'} className={s.error}>
          {questionErrors['questionFile']}
        </Typography>
      )}
      <input
        ref={questionFileInputRef}
        onChange={e => onQuestionImageChange(e, 'questionFile')}
        type={'file'}
        name={'questionFile'}
        id={'questionFile'}
        className={s.input_file}
      />
      <Typography variant={'subtitle2'} className={s.title}>
        Answer:
      </Typography>
      {answerImage && <img src={answerImage} className={s.image} />}
      <Button variant={'secondary'} className={s.button} onClick={handleAnswerButtonClick}>
        <Typography variant={'subtitle2'} className={s.button_text}>
          <ImageOutlined /> Change Cover
        </Typography>
      </Button>
      {answerErrors['answerFile'] && (
        <Typography variant={'body2'} className={s.error}>
          {answerErrors['answerFile']}
        </Typography>
      )}
      <input
        ref={answerFileInputRef}
        onChange={e => onAnswerImageChange(e, 'answerFile')}
        type={'file'}
        name={'answerFile'}
        id={'answerFile'}
        className={s.input_file}
      />
    </>
  )
}
