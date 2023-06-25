import { useState } from 'react'

import Avatar from '../../images/png/Ellipse 54.png'
import IncubatorLogo from '../../images/svg/incubatorLogo.svg'
import { Button } from '../ui/button'

import s from './header.module.scss'

export const Header = () => {
  // useState and onClickHandler are temporary logic to test UI
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

  const onClickHandler = () => {
    setIsLoggedIn(!isLoggedIn)
  }

  return (
    <div className={s.header}>
      <div className={s.header_container}>
        <div>
          <img src={IncubatorLogo} alt="incubator logo" />
        </div>
        {isLoggedIn ? (
          <div className={s.header_dropdown_block} onClick={onClickHandler}>
            <span className={s.header_username}>{'Ivan'}</span>
            <img src={Avatar} alt="username avatar" />
          </div>
        ) : (
          <Button variant="primary" className={s.header_btn} onClick={onClickHandler}>
            Sign in
          </Button>
        )}
      </div>
    </div>
  )
}
