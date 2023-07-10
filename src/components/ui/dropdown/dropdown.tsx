import { FC, ReactNode } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import { PlayCircle } from '../../../images/svg/icons/playCircle'
import { Avatar } from '../../header/avatar'
import { Typography } from '../typography'

import s from './dropdown.module.scss'
import { DropdownUserBlock } from './dropdownUserBlock/dropdownUserBlock.tsx'

type DropdownItemType = {
  icon: ReactNode
  text: string
  onClick?: () => void
}

type DropdownType = {
  userName?: string
  email?: string
  avatar?: string
  menuItems: DropdownItemType[]
  showUserBlock?: boolean
  trigger?: ReactNode
}
export const Dropdown: FC<DropdownType> = ({
  userName,
  email,
  avatar,
  menuItems,
  showUserBlock,
  trigger,
}) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className={s.trigger}>
        {showUserBlock ? (
          <>
            <Typography variant={'subtitle1'} className={s.user_name}>
              {userName}
            </Typography>
            <Avatar src={avatar} />
          </>
        ) : (
          trigger
        )}
      </DropdownMenu.Trigger>

      <DropdownMenu.Content className={s.content} sideOffset={10} align={'end'}>
        <div className={s.block}>
          {showUserBlock && (
            <DropdownUserBlock
              userName={userName ?? ''}
              email={email ?? ''}
              avatar={avatar ?? ''}
            />
          )}

          {showUserBlock && <DropdownMenu.Separator className={s.separator} />}

          {menuItems.map((item, index) => (
            <>
              <DropdownMenu.Item key={index} className={s.item}>
                <Typography variant={'caption'} className={s.item_icon} onClick={item.onClick}>
                  {item.icon} {item.text}
                </Typography>
              </DropdownMenu.Item>
              {index !== menuItems.length - 1 && <DropdownMenu.Separator className={s.separator} />}
            </>
          ))}
        </div>

        <DropdownMenu.Arrow className={s.arrow_box} asChild>
          <div className={`${s.arrow} ${!showUserBlock ? s.table_arrow : ''}`} />
        </DropdownMenu.Arrow>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}
