import { FC } from 'react'

import { Logout } from '../../images/svg/icons/logout'
import { ProfileIcon } from '../../images/svg/icons/profile'
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
            email={email}
            userName={userName}
            avatar={avatar}
            showUserBlock={true}
            menuItems={[
              {
                icon: <ProfileIcon />,
                text: 'My profile',
                onClick: () => {},
              },
              {
                icon: <Logout />,
                text: 'Sign out',
                onClick: changeIsLoggedIn,
              },
            ]}
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
