import { FC, ReactNode } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import { Typography } from '../typography'

import s from './dropdown.module.scss'

type DropdownType = {
  showUserBlock?: boolean
  trigger?: ReactNode
  children: ReactNode
}
export const Dropdown: FC<DropdownType> = ({ showUserBlock, trigger, children }) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className={s.trigger}>{trigger}</DropdownMenu.Trigger>
      <DropdownMenu.Content className={s.content} sideOffset={10} align={'end'}>
        <div className={s.block}>{children}</div>
        <DropdownMenu.Arrow className={s.arrow_box} asChild>
          <div className={`${s.arrow} ${!showUserBlock ? s.table_arrow : ''}`} />
        </DropdownMenu.Arrow>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}

type DropDownItemWithIconPropsType = {
  onSelect: () => void
  icon: ReactNode
  text: string
  separator?: boolean
}

export const DropDownItemWithIcon: FC<DropDownItemWithIconPropsType> = ({
  icon,
  text,
  onSelect,
  separator = false,
}) => {
  const onSelectHandler = (e: Event) => {
    e.preventDefault()
  }

  return (
    <>
      <DropdownMenu.Item className={s.item} onSelect={onSelectHandler}>
        <Typography variant={'caption'} className={s.item_icon}>
          {icon} {text}
        </Typography>
      </DropdownMenu.Item>
      {separator && <DropdownMenu.Separator className={s.separator} />}
    </>
  )
}

type DropDownItemPropsType = {
  children: ReactNode
  separator: boolean
}
export const DropDownItem: FC<DropDownItemPropsType> = ({ children, separator }) => {
  return (
    <>
      <DropdownMenu.Item className={s.item}>{children}</DropdownMenu.Item>
      {separator && <DropdownMenu.Separator className={s.separator} />}
    </>
  )
}
