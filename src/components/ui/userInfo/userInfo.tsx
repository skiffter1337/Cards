import { FC } from 'react'

import { Avatar } from '../../header/avatar'
import s from '../dropdown/dropdown.module.scss'
import { Typography } from '../typography'

type UserInfoPropsType = {
  userName: string
  src: string
}

export const UserInfo: FC<UserInfoPropsType> = ({ userName, src }) => {
  return (
    <>
      <Typography variant={'subtitle1'} className={s.user_name}>
        {userName}
      </Typography>
      <Avatar src={src} />
    </>
  )
}
