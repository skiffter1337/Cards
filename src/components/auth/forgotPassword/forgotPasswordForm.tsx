import { NavLink, useNavigate } from 'react-router-dom'

import { useRecoverPasswordMutation } from '../../../app/services'
import { Button } from '../../ui/button'
import { Card } from '../../ui/card'
import { ControlledInput } from '../../ui/controlled'
import { Typography } from '../../ui/typography'

import s from './forgotPasswordForm.module.scss'
import { useForgotPassword } from './useForgotPassword.ts'

export const ForgotPasswordForm = () => {
  const [recoverPassword] = useRecoverPasswordMutation()
  const { handleSubmit, control } = useForgotPassword()
  const navigate = useNavigate()
  const html =
    '<h1>Hi, ##name##</h1><p>Click <a href="http://localhost:5173/create-new-password/##token##">here</a> to recover your password</p>'
  const onSubmit = handleSubmit(data => {
    const { email } = data

    recoverPassword({ html, email })
      .unwrap()
      .then(() => {
        navigate('/check-email')
      })
      .catch(error => {
        console.log(error)
      })
  })

  return (
    <>
      <Card className={s.card}>
        <Typography variant={'large'} className={s.title}>
          Forgot your password?
        </Typography>

        <form onSubmit={onSubmit}>
          <ControlledInput
            id="email"
            label="Email"
            control={control}
            name={'email'}
            className={s.text_field}
          />
          <div>
            <Typography variant={'body2'} className={s.hint}>
              Enter your email address and we will send you further instructions
            </Typography>
          </div>
          <Button type={'submit'} fullWidth={true} className={s.submit_button}>
            <Typography variant={'subtitle2'} className={s.submit_button_text}>
              Send Instructions
            </Typography>
          </Button>
          <Typography variant={'body2'} className={s.remember_password}>
            {'Did you remember your password?'}
          </Typography>
          <div className={s.try_login_button_container}>
            <Button variant={'link'} as={NavLink} to={'/login'}>
              <Typography variant={'subtitle1'} className={s.try_login_button_text}>
                Try logging in
              </Typography>
            </Button>
          </div>
        </form>
      </Card>
    </>
  )
}
