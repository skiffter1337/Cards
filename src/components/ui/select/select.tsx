import { FC, ReactNode } from 'react'

import { ChevronDownIcon } from '@radix-ui/react-icons'
import * as SelectRadix from '@radix-ui/react-select'

import { Typography } from '../typography'

import s from './select.module.scss'

type SelectItemsType = {
  id: string
  value: string
  title: string
}

type SelectPropsType = {
  placeholder?: string
  ariaLabel: string
  selectItems: SelectItemsType[]
}
export const Select: FC<SelectPropsType> = ({ placeholder, ariaLabel, selectItems }) => {
  const selectPlaceholder = (
    <Typography variant={'body1'} className={s.placeholder}>
      {placeholder}
    </Typography>
  )

  return (
    <SelectRadix.Root>
      <SelectRadix.Trigger className={s.trigger} aria-label={ariaLabel}>
        <SelectRadix.Value placeholder={selectPlaceholder} />
        <SelectRadix.Icon className={s.icon}>
          <ChevronDownIcon />
        </SelectRadix.Icon>
      </SelectRadix.Trigger>
      <SelectRadix.Content className={s.content} position={'popper'}>
        <SelectRadix.Group>
          {selectItems.map(item => (
            <SelectItem key={item.id} value={item.value}>
              {item.title}
            </SelectItem>
          ))}
        </SelectRadix.Group>
      </SelectRadix.Content>
    </SelectRadix.Root>
  )
}

type SelectItemPropsType = {
  value: string
  children: ReactNode
}

const SelectItem: FC<SelectItemPropsType> = ({ value, children }) => {
  return (
    <SelectRadix.Item className={s.item} value={value}>
      <SelectRadix.ItemText>{children}</SelectRadix.ItemText>
    </SelectRadix.Item>
  )
}
