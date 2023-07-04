import { FC, ReactNode, useState } from 'react'

import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons'
import * as SelectRadix from '@radix-ui/react-select'

import { Label } from '../label/label.tsx'
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
  callback: () => void
}
export const Select: FC<SelectPropsType> = ({
  placeholder,
  ariaLabel,
  selectItems,
  label,
  disabled,
  callback,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(true)
  const onChangeHandler = () => {
    setIsOpen(!isOpen)
  }
  const placeholderValue = (
    <Typography variant={'body1'} className={`${s.placeholder} ${disabled ? s.disabled : ''}`}>
      {placeholder}
    </Typography>
  )

  return (
    <>
      <div>
        {label && (
          <Label
            title={label}
            variant={'body1'}
            classname={`${s.label} ${disabled ? s.disabled : ''}`}
          />
        )}
      </div>
      <SelectRadix.Root onOpenChange={onChangeHandler} disabled={disabled} onValueChange={callback}>
        <SelectRadix.Trigger
          className={`${s.trigger} ${!isOpen && s.opened}`}
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
                <SelectItem key={item.id} value={item.value} disabled={item.disabled}>
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
}

const SelectItem: FC<SelectItemPropsType> = ({ value, children, disabled }) => {
  return (
    <SelectRadix.Item className={s.item} value={value} disabled={disabled}>
      <SelectRadix.ItemText>{children}</SelectRadix.ItemText>
    </SelectRadix.Item>
  )
}
