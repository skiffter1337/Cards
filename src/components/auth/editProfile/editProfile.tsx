import { FC, useEffect, useState } from 'react'

import { useImageUploader } from '../../../hooks/useImageUploader'
import { EditOutlined } from '../../../images/svg/icons/editOutlined/editOutlined.tsx'
import { Logout } from '../../../images/svg/icons/logout'
import { Button } from '../../ui/button'
import { Card } from '../../ui/card'
import { ControlledInput } from '../../ui/controlled'
import { Typography } from '../../ui/typography'

import s from './editProfile.module.scss'
import { useEditProfile } from './useEditProfile.ts'

type EditProfilePropsType = {
  avatar: string
  userName: string
  email: string
  changeName: (newNickName: string) => void
  changeAvatar: (avatarImage: string) => void
}

// FIXME input file double open
// TODO input file errors UI
// TODO logout button onClick redirect to sign in
export const EditProfile: FC<EditProfilePropsType> = ({
  avatar,
  userName,
  email,
  changeName,
  changeAvatar,
}) => {
  const {
    image: avatarImage,
    errors: avatarErrors,
    onImageChange: onAvatarImageChange,
    fileInputRef: avatarFileInputRef,
    handleButtonClick: handleAvatarButtonClick,
  } = useImageUploader()

  const { handleSubmit, control } = useEditProfile()
  const onSubmit = handleSubmit(data => {
    setEditMode(false)
    console.log(data)
    changeName(data.nickName)
  })
  const [editMode, setEditMode] = useState<boolean>(false)

  useEffect(() => {
    changeAvatar(avatarImage)
  }, [avatarImage])

  return (
    <Card className={s.card}>
      <Typography variant={'large'} className={s.title}>
        Personal Information
      </Typography>
      <div className={s.user_avatar_block}>
        <div className={s.user_avatar_container}>
          <img src={avatar} alt={'user avatar'} className={s.user_avatar} />
          <label
            className={`${s.edit_image_icon_wrapper} ${editMode && s.disabled}`}
            htmlFor={'avatar'}
            onClick={handleAvatarButtonClick}
          >
            <EditOutlined className={s.edit_image_icon} />
          </label>
        </div>

        <input
          ref={avatarFileInputRef}
          onChange={e => onAvatarImageChange(e, 'avatar')}
          type={'file'}
          id={'avatar'}
          name={'avatar'}
          className={`${s.file} ${s.edit_user_image}`}
        />
      </div>
      {!editMode ? (
        <>
          <div className={s.user_name_block}>
            <div className={s.user_name_container}>
              <Typography variant={'h1'} className={s.user_name}>
                {userName}
              </Typography>
              <EditOutlined className={s.edit_name_icon} onClick={() => setEditMode(true)} />
            </div>
          </div>
          <Typography variant={'body2'} className={s.email}>
            {email}
          </Typography>
          <div className={s.button_block}>
            <Button variant={'secondary'}>
              <Logout />{' '}
              <Typography variant={'subtitle2'} className={s.button_text}>
                Logout
              </Typography>
            </Button>
          </div>
        </>
      ) : (
        <form onSubmit={onSubmit} className={s.form}>
          <ControlledInput
            id="nickName"
            label="NickName"
            control={control}
            name={'nickName'}
            className={s.text_field}
          />
          <Button fullWidth={true}>
            <Typography variant={'subtitle2'} className={s.button_text}>
              Save Changes
            </Typography>
          </Button>
        </form>
      )}
    </Card>
  )
}
