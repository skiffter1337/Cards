import { FC } from 'react'

import { NavLink } from 'react-router-dom'

import { User } from '../../../app/services/auth/types.ts'
import { Logo } from '../../../images/svg/incubator'
import { Button } from '../../ui/button'
import { AvatarDropDown } from '../../ui/dropdown/avatarDrowpDown'
import { Typography } from '../../ui/typography'

import avatarPlaceHolder from './../../../images/png/avatar.png'
import s from './header.module.scss'

//todo: prop for logged in and

export type HeaderPropsType = {
  userInfo?: User | null
  logout: () => void
}
export const Header: FC<HeaderPropsType> = ({ logout, userInfo }) => {
  const handleLogout = () => logout()

  return (
    <div className={s.header}>
      <div className={s.container}>
        <div className={s.logo}>
          <NavLink to={'/'}>
            <Logo />
          </NavLink>
        </div>
        {userInfo ? (
          <AvatarDropDown
            name={userInfo?.name}
            email={userInfo?.email}
            src={userInfo?.avatar ?? avatarPlaceHolder}
            logout={handleLogout}
          />
        ) : (
          <Button variant="primary" as={NavLink} to={'/login'}>
            <Typography variant={'subtitle2'} className={s.button_text}>
              Sign in
            </Typography>
          </Button>
        )}
      </div>
    </div>
  )
}
