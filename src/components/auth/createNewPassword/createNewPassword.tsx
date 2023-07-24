import { useNavigate } from 'react-router-dom'

import { useResetPasswordMutation } from '../../../app/services'
import { Button } from '../../ui/button'
import { Card } from '../../ui/card'
import { ControlledInput } from '../../ui/controlled'
import { Typography } from '../../ui/typography'

import s from './createNewPassword.module.scss'
import { useCreateNewPassword } from './useCreateNewPassword.ts'

export const CreateNewPassword = () => {
  const [resetPassword] = useResetPasswordMutation()
  const navigate = useNavigate()
  const { handleSubmit, control } = useCreateNewPassword()

  const onSubmit = handleSubmit(data => {
    resetPassword(data)
      .unwrap()
      .then(() => navigate('/login'))
      .catch(error => {
        console.log(error)
      })
  })

  return (
    <Card className={s.card}>
      <Typography variant={'large'} className={s.title}>
        Create new password
      </Typography>
      <form onSubmit={onSubmit}>
        <ControlledInput
          id={'password'}
          label={'Password'}
          type={'password'}
          control={control}
          name={'password'}
          className={s.text_field}
        />
        <div>
          <Typography variant={'body2'} className={s.hint}>
            Create new password and we will send you further instructions to email
          </Typography>
        </div>
        <Button fullWidth={true}>
          <Typography variant={'subtitle2'} className={s.button_text}>
            Create New Password
          </Typography>
        </Button>
      </form>
    </Card>
  )
}
