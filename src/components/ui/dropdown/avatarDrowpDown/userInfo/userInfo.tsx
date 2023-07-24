import { FC } from 'react'

import { Avatar } from '../../../../layout/header/avatar'
import { Typography } from '../../../typography'

import s from './userInfo.module.scss'

type UserInfoPropsType = {
  name: string
  src: string
}

export const UserInfo: FC<UserInfoPropsType> = ({ name, src }) => {
  return (
    <>
      <Typography variant={'subtitle1'} className={s.user_name}>
        {name}
      </Typography>
      <Avatar src={src} />
    </>
  )
}
