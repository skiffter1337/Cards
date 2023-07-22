import { FC } from 'react'

import { Outlet } from 'react-router-dom'

import { Header, HeaderPropsType } from './header'
import s from './laytout.module.scss'

type LayoutPropsType = HeaderPropsType
export const Layout: FC<LayoutPropsType> = ({
  avatar,
  email,
  changeIsLoggedIn,
  userName,
  isLoggedIn,
}) => {
  return (
    <>
      <Header
        isLoggedIn={isLoggedIn}
        changeIsLoggedIn={changeIsLoggedIn}
        email={email}
        userName={userName}
        avatar={avatar}
      />
      <div className={s.outlet}>
        <Outlet />
      </div>
    </>
  )
}
