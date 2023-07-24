import { FC } from 'react'

import { NavLink } from 'react-router-dom'

import { Logout } from '../../../../images/svg/icons/logout'
import { ProfileIcon } from '../../../../images/svg/icons/profile'
import { Avatar } from '../../../layout/header/avatar'
import { Typography } from '../../typography'

import { Dropdown, DropDownItem, DropDownItemWithIcon } from './../dropdown.tsx'
import s from './avatarDropDown.module.scss'
import { UserInfo } from './userInfo'

type AvatarDropDownPropsType = {
  name?: string
  email?: string
  src: string
  logout: () => void
}
// FIXME DROPDOWN ITEM SEPARATOR POPIERDOLILO
export const AvatarDropDown: FC<AvatarDropDownPropsType> = ({ name, email, src, logout }) => {
  return (
    <Dropdown showUserBlock={true} trigger={<UserInfo name={name ?? ''} src={src} />}>
      <DropDownItem separator={true}>
        <div className={s.user_block}>
          <div className={s.user_avatar}>
            <NavLink to={'/editProfile'}>
              <Avatar src={src} />
            </NavLink>
          </div>
          <div className={s.user_info}>
            <div className={s.user_name}>
              <Typography variant={'subtitle2'}>{name}</Typography>
            </div>
            <div className={s.user_email}>
              <Typography variant={'caption'}>{email}</Typography>
            </div>
          </div>
        </div>
      </DropDownItem>
      <NavLink to={'/editProfile'}>
        <DropDownItemWithIcon icon={<ProfileIcon />} text={'My profile'} separator={true} />
      </NavLink>
      <DropDownItemWithIcon icon={<Logout />} text={'Sign out'} onSelect={logout} />
    </Dropdown>
  )
}
