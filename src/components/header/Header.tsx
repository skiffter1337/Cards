import { useState } from 'react'

import { Logo } from '../../images/svg/incubator'
import { Button } from '../ui/button'

import { Dropdown } from './dropdown'
import s from './header.module.scss'

export const Header = () => {
  // useState and onClickHandler are temporary logic to test UI
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

  const onClickHandler = () => {
    setIsLoggedIn(!isLoggedIn)
  }
  // useState and onClickHandler are temporary logic to test UI

  return (
    <div className={s.header}>
      <div className={s.header_container}>
        <div>
          <Logo />
        </div>
        {isLoggedIn ? (
          <Dropdown callBack={onClickHandler} />
        ) : (
          <Button variant="primary" onClick={onClickHandler}>
            Sign in
          </Button>
        )}
      </div>
    </div>
  )
}
