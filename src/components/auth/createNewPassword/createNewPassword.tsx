import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import { useResetPasswordMutation } from '../../../app/services'
import { toastError } from '../../../helpers/toastVariants/error'
import { toastSuccess } from '../../../helpers/toastVariants/success'
import { Button } from '../../ui/button'
import { Card } from '../../ui/card'
import { ControlledInput } from '../../ui/controlled'
import { Typography } from '../../ui/typography'

import s from './createNewPassword.module.scss'
import { useCreateNewPassword } from './useCreateNewPassword.ts'

type Token = {
  token: string
}

export const CreateNewPassword = () => {
  const [resetPassword] = useResetPasswordMutation()
  const navigate = useNavigate()
  const { handleSubmit, control } = useCreateNewPassword()

  const { token } = useParams<Token>()

  const onSubmit = handleSubmit(({ password }) => {
    if (token) {
      resetPassword({ password, token })
        .unwrap()
        .then(() => {
          navigate('/login')
          toast.success('Password changed successfully', toastSuccess)
        })
        .catch(error => {
          toast.error(error, toastError)
        })
    } else console.warn("Token doesn't exist")
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
