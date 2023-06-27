import { useState } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import Avatar from '../../images/png/Ellipse 54.png'
import { Logout } from '../../images/svg/icons/logout'
import { ProfileIcon } from '../../images/svg/icons/profile/profileIcon.tsx'
import IncubatorLogo from '../../images/svg/incubatorLogo.svg'
import { Button } from '../ui/button'
import { Typography } from '../ui/typography'

import s from './header.module.scss'

export const Header = () => {
  // useState and onClickHandler are temporary logic to test UI
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const [showDropdownMenu, setShowDropdownMenu] = useState<boolean>(false)

  const toggleDropdownMenu = () => setShowDropdownMenu(!showDropdownMenu)

  const onClickHandler = () => {
    setIsLoggedIn(!isLoggedIn)
  }
  // useState and onClickHandler are temporary logic to test UI

  return (
    <div className={s.header}>
      <div className={s.header_container}>
        <div>
          <img src={IncubatorLogo} alt="incubator logo" />
        </div>
        {isLoggedIn ? (
          <div className={s.header_dropdown}>
            <span className={s.header_username}>{'Ivan'}</span>

            {/*dropdown*/}

            <DropdownMenu.Root>
              <DropdownMenu.Trigger className={s.dropdown_menu_trigger}>
                <img src={Avatar} alt="username avatar" onClick={toggleDropdownMenu} />
              </DropdownMenu.Trigger>
              <DropdownMenu.Content className={s.dropdown_menu_content} sideOffset={3}>
                <div className={s.dropdown_menu_block}>
                  <DropdownMenu.Item className={s.dropdown_menu_user_block}>
                    <div className={s.dropdown_menu_user_avatar}>
                      <img src={Avatar} alt="username avatar" />
                    </div>
                    <div className={s.dropdown_menu_user_info}>
                      <div className={s.dropdown_menu_user_name}>
                        <Typography variant={'subtitle2'}>Ivan</Typography>
                      </div>
                      <div className={s.dropdown_menu_user_email}>
                        <Typography variant={'caption'}>example@gmail.com</Typography>
                      </div>
                    </div>
                  </DropdownMenu.Item>
                  <DropdownMenu.Separator className={s.dropdown_menu_separator} />
                  <DropdownMenu.Item>
                    <Typography variant={'caption'} className={s.dropdown_menu_item_icon}>
                      <>
                        <ProfileIcon /> My profile
                      </>
                    </Typography>
                  </DropdownMenu.Item>
                  <DropdownMenu.Separator className={s.dropdown_menu_separator} />
                  <DropdownMenu.Item>
                    <Typography
                      variant={'caption'}
                      className={s.dropdown_menu_item_icon}
                      onClick={onClickHandler}
                    >
                      <>
                        <Logout /> Sign out
                      </>
                    </Typography>
                  </DropdownMenu.Item>
                </div>
                <DropdownMenu.Arrow className={s.dropdown_menu_arrow} />
              </DropdownMenu.Content>
            </DropdownMenu.Root>

            {/*dropdown*/}
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
