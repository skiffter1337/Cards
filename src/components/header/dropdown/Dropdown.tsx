import { FC } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import AvatarImg from '../../../images/png/Ellipse 54.png'
import { Logout } from '../../../images/svg/icons/logout'
import { ProfileIcon } from '../../../images/svg/icons/profile'
import { Typography } from '../../ui/typography'
import { Avatar } from '../avatar'

import s from './dropdown.module.scss'

type DropdownType = {
  callBack?: () => void
}
export const Dropdown: FC<DropdownType> = ({ callBack }) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className={s.dropdown_menu_trigger}>
        <Typography variant={'subtitle1'} className={s.username}>
          {'Ivan'}
        </Typography>
        <Avatar src={AvatarImg} />
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className={s.dropdown_menu_content} sideOffset={10} align={'end'}>
        <div className={s.dropdown_menu_block}>
          <DropdownMenu.Item className={s.dropdown_menu_user_block}>
            <div className={s.dropdown_menu_user_avatar}>
              <Avatar src={AvatarImg} />
            </div>
            <div className={s.dropdown_menu_user_info}>
              <div className={s.dropdown_menu_user_name}>
                <Typography variant={'subtitle2'}>Ivan</Typography>
              </div>
              <div className={s.dropdown_menu_user_email}>
                <Typography variant={'caption'}>example@gmail.com</Typography>
              </div>
            </div>
          </DropdownMenu.Item>
          <DropdownMenu.Separator className={s.dropdown_menu_separator} />
          <DropdownMenu.Item>
            <Typography variant={'caption'} className={s.dropdown_menu_item_icon}>
              <ProfileIcon /> My profile
            </Typography>
          </DropdownMenu.Item>
          <DropdownMenu.Separator className={s.dropdown_menu_separator} />
          <DropdownMenu.Item>
            <Typography
              variant={'caption'}
              className={s.dropdown_menu_item_icon}
              onClick={callBack}
            >
              <Logout /> Sign out
            </Typography>
          </DropdownMenu.Item>
        </div>
        <DropdownMenu.Arrow className={s.dropdown_menu_arrow_box} asChild>
          <div className={s.dropdown_menu_arrow} />
        </DropdownMenu.Arrow>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}
