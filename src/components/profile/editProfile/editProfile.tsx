import { useEffect, useState } from 'react'

import { NavLink } from 'react-router-dom'
import { toast } from 'react-toastify'

import { useMeQuery, useUpdateUserInfoMutation } from '../../../app/services'
import { toastError } from '../../../helpers/toastVariants/error'
import { toastSuccess } from '../../../helpers/toastVariants/success'
import { useImageUploader } from '../../../hooks/useImageUploader'
import AvatarPlaceholder from '../../../images/png/avatar.png'
import { EditOutlined } from '../../../images/svg/icons/editOutlined/editOutlined.tsx'
import { Logout } from '../../../images/svg/icons/logout'
import { Button } from '../../ui/button'
import { Card } from '../../ui/card'
import { ControlledInput } from '../../ui/controlled'
import { Typography } from '../../ui/typography'

import s from './editProfile.module.scss'
import { useEditProfile } from './useEditProfile.ts'

export const EditProfile = () => {
  const {
    image: avatar,
    errors: avatarErrors,
    onImageChange: onAvatarImageChange,
    fileInputRef: avatarFileInputRef,
  } = useImageUploader(AvatarPlaceholder)

  // TODO FIX AVATAR CHANGE (need trigger from input interface, not useEffect)
  useEffect(() => {
    updateUserInfo({ avatar })
  }, [avatar])

  const { data } = useMeQuery()
  const [updateUserInfo] = useUpdateUserInfoMutation()
  const { handleSubmit, control } = useEditProfile(data?.name)
  const onSubmit = handleSubmit(name => {
    setEditMode(false)
    updateUserInfo(name)
      .unwrap()
      .then(() => {
        toast.success('Name successfully changed', toastSuccess)
      })
  })
  const [editMode, setEditMode] = useState<boolean>(false)

  if (avatarErrors.avatar) {
    toast(avatarErrors.avatar, toastError)
  }

  return (
    <Card className={s.card}>
      <Typography variant={'large'} className={s.title}>
        Personal Information
      </Typography>
      <div className={s.user_avatar_block}>
        <div className={s.user_avatar_container}>
          <img
            src={data?.avatar ?? AvatarPlaceholder}
            alt={'user avatar'}
            className={s.user_avatar}
          />
          <label className={`${s.edit_image_icon_wrapper} ${editMode && s.disabled}`}>
            <input
              ref={avatarFileInputRef}
              placeholder={data?.name}
              onChange={e => onAvatarImageChange(e, 'avatar')}
              type={'file'}
              id={'avatar'}
              name={'avatar'}
              className={`${s.file} ${s.edit_user_image}`}
            />
            <EditOutlined className={s.edit_image_icon} />
          </label>
        </div>
      </div>
      {!editMode ? (
        <>
          <div className={s.user_name_block}>
            <div className={s.user_name_container}>
              <Typography variant={'h1'} className={s.user_name}>
                {data?.name}
              </Typography>
              <EditOutlined className={s.edit_name_icon} onClick={() => setEditMode(true)} />
            </div>
          </div>
          <Typography variant={'body2'} className={s.email}>
            {data?.email}
          </Typography>
          <div className={s.button_block}>
            <NavLink to={'/login'}>
              <Button variant={'secondary'}>
                <Logout />{' '}
                <Typography variant={'subtitle2'} className={s.button_text}>
                  Logout
                </Typography>
              </Button>
            </NavLink>
          </div>
        </>
      ) : (
        <form onSubmit={onSubmit} className={s.form}>
          <ControlledInput
            id="name"
            label="NickName"
            control={control}
            name={'name'}
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
