import { FC } from 'react'

import { NavLink } from 'react-router-dom'

import { Logo } from '../../images/svg/incubator'
import { Button } from '../ui/button'
import { AvatarDropDown } from '../ui/dropdown/avatarDrowpDown'
import { Typography } from '../ui/typography'

import s from './header.module.scss'

//todo: prop for logged in and

type HeaderPropsType = {
  isLoggedIn: boolean
  changeIsLoggedIn: () => void
  userName: string
  email: string
  avatar: string
}
export const Header: FC<HeaderPropsType> = ({
  isLoggedIn,
  changeIsLoggedIn,
  userName,
  email,
  avatar,
}) => {
  return (
    <div className={s.header}>
      <div className={s.container}>
        <div className={s.logo}>
          <NavLink to={'/'}>
            <Logo />
          </NavLink>
        </div>
        {isLoggedIn ? (
          <AvatarDropDown
            userName={userName}
            email={email}
            src={avatar}
            logout={changeIsLoggedIn}
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
