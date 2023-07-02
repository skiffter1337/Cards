import { FC } from 'react'

import AvatarImg from '../../images/png/Ellipse 54.png'
import { Logo } from '../../images/svg/incubator'
import { Button } from '../ui/button'
import { Dropdown } from '../ui/dropdown'

import s from './header.module.scss'

//todo: prop for logged in and

type HeaderPropsType = {
  isLoggedIn: boolean
  changeIsLoggedIn: () => void
}
export const Header: FC<HeaderPropsType> = ({ isLoggedIn, changeIsLoggedIn }) => {
  return (
    <div className={s.header}>
      <div className={s.container}>
        <div className={s.user_avatar}>
          <Logo />
        </div>
        {isLoggedIn ? (
          <Dropdown
            changeIsLoggedIn={changeIsLoggedIn}
            email={'example@gmail.com'}
            userName={'Ivan'}
            avatar={AvatarImg}
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
