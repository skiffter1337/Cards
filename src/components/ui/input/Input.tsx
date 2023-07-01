import { ChangeEvent, ComponentProps, ReactNode, useState } from 'react'

import { Close } from '../../../images/svg/icons/close'
import { EyeOffOutlined } from '../../../images/svg/icons/eyeOffOutlined'
import { EyeOutlined } from '../../../images/svg/icons/eyeOutlined'
import { Search } from '../../../images/svg/icons/search'
import { Label } from '../label/label.tsx'
import { Typography } from '../typography'

import s from './input.module.scss'

export type InputPropsType = {
  label?: string
  errorMessage?: string
  search?: boolean
  iconStart?: ReactNode
  iconEnd?: ReactNode
  type?: 'text' | 'password'
  onClearClick?: () => void
  onChange: (text: ChangeEvent<HTMLInputElement>) => void
  value?: string
  disabled?: boolean
  placeholder?: string
  error?: boolean
} & ComponentProps<'input'>

export const Input: React.FC<InputPropsType> = ({
  label,
  errorMessage,
  error,
  search,
  iconStart,
  iconEnd,
  type = 'text',
  onClearClick,
  value,
  onChange,
  disabled,
  placeholder,
  ...rest
}) => {
  // test logic
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event)
  }
  // test logic

  const [showPass, setShowPass] = useState<boolean>(false)

  const showError = !!errorMessage && errorMessage.length > 0
  const eyeIconColor = disabled ? 'var(--color-dark-300)' : 'var(--color-light-100)'
  const onMouseDownHandler = () => {
    if (type === 'password') {
      setShowPass(true)
    }
  }
  const onMouseUpHandler = () => {
    if (type === 'password') {
      setShowPass(false)
    }
  }
  const onClearClickHandler = () => {
    if (onClearClick) {
      onClearClick()
    }
  }

  if (search) {
    iconStart = <Search color={'var(--color-dark-100)'} />
  }

  if (onClearClick) {
    iconEnd = value && (
      <button className={s.clear_button} onClick={onClearClickHandler}>
        <Close color={'var(--color-light-100)'} />
      </button>
    )
  }
  if (type === 'password') {
    iconEnd = showPass ? (
      <EyeOffOutlined color={eyeIconColor} onMouseUp={onMouseUpHandler} />
    ) : (
      <EyeOutlined color={eyeIconColor} onMouseDown={onMouseDownHandler} />
    )
  }
  const inputType = showPass ? 'text' : type

  return (
    <div>
      {label && (
        <>
          <Label
            label={label}
            variant={'body2'}
            classname={`${s.label} ${disabled ? s.disabled : ''}`}
          />
        </>
      )}
      <div className={s.input_container}>
        {!!iconStart && <span className={s.input_icon_start}>{iconStart}</span>}
        <input
          value={value}
          onChange={onChangeHandler}
          type={inputType}
          className={`${s.input} ${showError ? s.error : ''} ${search ? s.search : ''}`}
          placeholder={placeholder}
          disabled={disabled}
          {...rest}
        />
        {!!iconEnd && <span className={s.input_icon_end}>{iconEnd}</span>}
      </div>
      {showError && (
        <Typography variant={'error'} className={s.error_message}>
          {errorMessage}
        </Typography>
      )}
    </div>
  )
}
