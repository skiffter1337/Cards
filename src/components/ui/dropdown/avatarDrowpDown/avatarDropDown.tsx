import { FC } from 'react'

import { Logout } from '../../../../images/svg/icons/logout'
import { ProfileIcon } from '../../../../images/svg/icons/profile'
import { Avatar } from '../../../header/avatar'
import { Typography } from '../../typography'

import { Dropdown, DropDownItem, DropDownItemWithIcon } from './../dropdown.tsx'
import s from './avatarDropDown.module.scss'
import { UserInfo } from './userInfo'

type AvatarDropDownPropsType = {
  userName: string
  email: string
  src: string
  logout: () => void
}
export const AvatarDropDown: FC<AvatarDropDownPropsType> = ({ userName, email, src, logout }) => {
  return (
    <Dropdown showUserBlock={true} trigger={<UserInfo userName={userName} src={src} />}>
      <DropDownItem separator={true}>
        <div className={s.user_block}>
          <div className={s.user_avatar}>
            <Avatar src={src} />
          </div>
          <div className={s.user_info}>
            <div className={s.user_name}>
              <Typography variant={'subtitle2'}>{userName}</Typography>
            </div>
            <div className={s.user_email}>
              <Typography variant={'caption'}>{email}</Typography>
            </div>
          </div>
        </div>
      </DropDownItem>
      <DropDownItemWithIcon
        icon={<ProfileIcon />}
        text={'My profile'}
        onSelect={() => {}}
        separator={true}
      />
      <DropDownItemWithIcon icon={<Logout />} text={'Sign out'} onSelect={logout} />
    </Dropdown>
  )
}
