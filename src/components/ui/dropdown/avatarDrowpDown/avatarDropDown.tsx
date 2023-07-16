import { FC } from 'react'

import { Logout } from '../../../../images/svg/icons/logout'
import { ProfileIcon } from '../../../../images/svg/icons/profile'
import { Avatar } from '../../../header/avatar'
import { Typography } from '../../typography'
import { UserInfo } from '../../userInfo/userInfo.tsx'
import s from '../dropdown.module.scss'
import { Dropdown, DropDownItem, DropDownItemWithIcon } from '../dropdown.tsx'

type AvatarDropDownPropsType = {
  userName: string
  email: string
  src: string
}
export const AvatarDropDown: FC<AvatarDropDownPropsType> = ({ userName, email, src }) => {
  return (
    <Dropdown showUserBlock={true} trigger={<UserInfo userName={userName} src={src} />}>
      <DropDownItem separator={true}>
        <div className={s.user_block}>
          <div className={s.user_avatar}>
            <Avatar src={src} />
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
      </DropDownItem>
      <DropDownItemWithIcon
        icon={<ProfileIcon />}
        text={'My profile'}
        onClick={() => {}}
        separator={true}
      />
      <DropDownItemWithIcon icon={<Logout />} text={'Sign out'} onClick={() => {}} />
    </Dropdown>
  )
}
