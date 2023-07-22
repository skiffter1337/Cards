import { FC } from 'react'

import { Avatar } from '../../../../layout/header/avatar'
import { Typography } from '../../../typography'

import s from './userInfo.module.scss'

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
