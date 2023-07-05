import { FC } from 'react'

import { Logo } from '../../images/svg/incubator'
import { Button } from '../ui/button'
import { Dropdown } from '../ui/dropdown'

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
        <div className={s.user_avatar}>
          <Logo />
        </div>
        {isLoggedIn ? (
          <Dropdown
            changeIsLoggedIn={changeIsLoggedIn}
            email={email}
            userName={userName}
            avatar={avatar}
          />
        ) : (
          <Button variant="primary" onClick={changeIsLoggedIn}>
            Sign in
          </Button>
        )}
      </div>
    </div>
  )
}
