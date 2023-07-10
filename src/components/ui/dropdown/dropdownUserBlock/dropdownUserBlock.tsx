import { FC } from 'react'

import { Avatar } from '../../../header/avatar'
import { Typography } from '../../typography'

import s from './../dropdown.module.scss'

type DropdownUserBlockProps = {
  userName: string
  email: string
  avatar: string
}

export const DropdownUserBlock: FC<DropdownUserBlockProps> = ({ userName, email, avatar }) => {
  return (
    <div className={s.user_block}>
      <div className={s.user_avatar}>
        <Avatar src={avatar} />
      </div>
      <div className={s.user_info}>
        <div className={s.user_name}>
          <Typography variant={'subtitle2'}>{userName}</Typography>
        </div>
        <div className={s.user_email}>
          <Typography variant={'caption'}>{email}</Typography>
        </div>
      </div>
    </div>
  )
}
