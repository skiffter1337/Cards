import { NavLink } from 'react-router-dom'

import { Button } from '../../ui/button'
import { Card } from '../../ui/card'
import { ControlledInput, ControlledCheckbox } from '../../ui/controlled'
import { Typography } from '../../ui/typography'

import s from './loginForm.module.scss'
import { useLoginForm } from './useLoginForm.ts'

export const LoginForm = () => {
  const { handleSubmit, control } = useLoginForm()

  const onSubmit = handleSubmit(data => console.log(data))

  return (
    <>
      <Card className={s.card}>
        <Typography variant={'large'} className={s.title}>
          Sign In
        </Typography>

        <form onSubmit={onSubmit}>
          <ControlledInput
            id="email"
            label="Email"
            control={control}
            name={'email'}
            className={s.text_field}
          />
          <ControlledInput
            id={'password'}
            label={'Password'}
            type={'password'}
            control={control}
            name={'password'}
            className={s.text_field}
          />
          <ControlledCheckbox
            label={'Remember me'}
            name={'rememberMe'}
            control={control}
            className={s.checkbox}
            size={'default'}
          />
          {/*link*/}
          <div className={s.forgot_password_block}>
            <Button variant={'link'} as={NavLink} to={'/forgotPassword'}>
              <Typography variant={'body2'} className={s.forgot_password}>
                Forgot password?
              </Typography>
            </Button>
          </div>
          <Button type={'submit'} fullWidth={true} className={s.submit_button}>
            <Typography variant={'subtitle2'} className={s.submit_button_text}>
              Sign in
            </Typography>
          </Button>
          <Typography variant={'body2'} className={s.dont_have_account}>
            {`Don't have an account?`}
          </Typography>
          <div className={s.sign_up_button_container}>
            <Button variant={'link'} as={NavLink} to={'/signUp'}>
              <Typography variant={'subtitle1'} className={s.sign_up_button_text}>
                Sign up
              </Typography>
            </Button>
          </div>
          {/*link*/}
        </form>
      </Card>
    </>
  )
}
