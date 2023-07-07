import { FC, useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { EditOutlined } from '../../../images/svg/icons/editOutlined/editOutlined.tsx'
import { Logout } from '../../../images/svg/icons/logout'
import { Button } from '../../ui/button'
import { Card } from '../../ui/card'
import { ControlledInput } from '../../ui/controlled'
import { Typography } from '../../ui/typography'

import s from './editProfile.module.scss'

type EditProfilePropsType = {
  avatar: string
  userName: string
  email: string
}

const schema = z.object({
  nickName: z
    .string()
    .trim()
    .nonempty('Enter nickname')
    .min(3, 'Nickname must be at least 8 symbols'),
})

type Form = z.infer<typeof schema>
export const EditProfile: FC<EditProfilePropsType> = ({ avatar, userName, email }) => {
  const { handleSubmit, control } = useForm<Form>({
    resolver: zodResolver(schema),
    mode: 'onSubmit',
  })

  const onSubmit = handleSubmit(data => {
    setEditMode(false)
    console.log(data)
  })

  const [editMode, setEditMode] = useState<boolean>(false)

  console.log(editMode)

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
            htmlFor={'edit_image'}
          >
            <EditOutlined className={s.edit_image_icon} />
          </label>
        </div>
        <input type={'file'} id={'edit_image'} className={`${s.file} ${s.edit_user_image}`} />
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
