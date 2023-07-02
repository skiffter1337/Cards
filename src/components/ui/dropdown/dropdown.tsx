import { FC } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import { Logout } from '../../../images/svg/icons/logout'
import { ProfileIcon } from '../../../images/svg/icons/profile'
import { Avatar } from '../../header/avatar'
import { Typography } from '../typography'

import s from './dropdown.module.scss'

type DropdownType = {
  changeIsLoggedIn: () => void
  userName: string
  email: string
  avatar: string
}
export const Dropdown: FC<DropdownType> = ({ changeIsLoggedIn, userName, email, avatar }) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className={s.menu_trigger}>
        <Typography variant={'subtitle1'} className={s.user_name}>
          {userName}
        </Typography>
        <Avatar src={avatar} />
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className={s.menu_content} sideOffset={10} align={'end'}>
        <div className={s.menu_block}>
          <DropdownMenu.Item className={`${s.menu_item} ${s.menu_user_block}`}>
            <div className={s.menu_user_avatar}>
              <Avatar src={avatar} />
            </div>
            <div className={s.menu_user_info}>
              <div className={s.menu_user_name}>
                <Typography variant={'subtitle2'}>{userName}</Typography>
              </div>
              <div className={s.menu_user_email}>
                <Typography variant={'caption'}>{email}</Typography>
              </div>
            </div>
          </DropdownMenu.Item>
          <DropdownMenu.Separator className={s.menu_separator} />
          <DropdownMenu.Item className={s.menu_item}>
            <Typography variant={'caption'} className={s.menu_item_icon}>
              <ProfileIcon /> My profile
            </Typography>
          </DropdownMenu.Item>
          <DropdownMenu.Separator className={s.menu_separator} />
          <DropdownMenu.Item className={s.menu_item}>
            <Typography variant={'caption'} className={s.menu_item_icon} onClick={changeIsLoggedIn}>
              <Logout /> Sign out
            </Typography>
          </DropdownMenu.Item>
        </div>

        <DropdownMenu.Arrow className={s.menu_arrow_box} asChild>
          <div className={s.menu_arrow} />
        </DropdownMenu.Arrow>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}
