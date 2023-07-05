import { FC, ReactNode, useState } from 'react'

import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons'
import * as SelectRadix from '@radix-ui/react-select'

import { Typography } from '../typography'

import s from './select.module.scss'

type SelectItemsType = {
  id: string
  value: string
  title: string
  disabled: boolean
}

type SelectPropsType = {
  placeholder?: string
  ariaLabel: string
  label?: string
  selectItems: SelectItemsType[]
  disabled?: boolean
  callback: (option: string) => void
  size: 'small' | 'large'
}
export const Select: FC<SelectPropsType> = ({
  placeholder,
  ariaLabel,
  selectItems,
  label,
  disabled,
  callback,
  size,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(true)
  const onChangeHandler = () => {
    setIsOpen(!isOpen)
  }
  const placeholderValue = (
    <Typography variant={'body1'} className={`${s.placeholder} ${disabled ? s.disabled : ''}`}>
      {placeholder?.length ? placeholder : selectItems[0].title}
    </Typography>
  )

  return (
    <>
      <div>
        {label && (
          <Typography variant={'body2'} className={`${s.label} ${disabled ? s.disabled : ''}`}>
            {label}
          </Typography>
        )}
      </div>
      <SelectRadix.Root onOpenChange={onChangeHandler} disabled={disabled} onValueChange={callback}>
        <SelectRadix.Trigger
          className={`${s.trigger}  ${!isOpen && s.opened} ${size && s[size]}`}
          aria-label={ariaLabel}
        >
          <SelectRadix.Value placeholder={placeholderValue} />
          <SelectRadix.Icon className={s.icon}>
            {isOpen ? (
              <ChevronDownIcon
                color={disabled ? 'var(--color-dark-300)' : 'var(--color-light-100)'}
              />
            ) : (
              <ChevronUpIcon />
            )}
          </SelectRadix.Icon>
        </SelectRadix.Trigger>
        <SelectRadix.Content className={s.content} position={'popper'} avoidCollisions={false}>
          <SelectRadix.Viewport>
            <SelectRadix.Group>
              {selectItems.map(item => (
                <SelectItem key={item.id} value={item.value} disabled={item.disabled} size={size}>
                  {item.title}
                </SelectItem>
              ))}
            </SelectRadix.Group>
          </SelectRadix.Viewport>
        </SelectRadix.Content>
      </SelectRadix.Root>
    </>
  )
}

type SelectItemPropsType = {
  value: string
  children: ReactNode
  disabled: boolean
  size: 'small' | 'large'
}

const SelectItem: FC<SelectItemPropsType> = ({ value, children, disabled, size }) => {
  return (
    <SelectRadix.Item className={`${s.item} ${size && s[size]}`} value={value} disabled={disabled}>
      <SelectRadix.ItemText>{children}</SelectRadix.ItemText>
    </SelectRadix.Item>
  )
}
