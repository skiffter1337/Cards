import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '../../ui/button'
import { Card } from '../../ui/card'
import { ControlledInput } from '../../ui/controlled'
import { ControlledCheckbox } from '../../ui/controlled/controlledCheckbox.tsx'
import { Typography } from '../../ui/typography'

import s from './loginForm.module.scss'

const schema = z.object({
  email: z.string().trim().email('Invalid email').nonempty('Enter email'),
  password: z
    .string()
    .trim()
    .nonempty('Enter password')
    .min(8, 'Password must be at least 8 symbols'),
  rememberMe: z.boolean().optional(),
})

type Form = z.infer<typeof schema>
export const LoginForm = () => {
  const { handleSubmit, control, formState } = useForm<Form>({
    resolver: zodResolver(schema),
    mode: 'onSubmit',
  })

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
          />
          {/*link*/}
          <div className={s.forgot_password_block}>
            <Button variant={'link'}>
              <Typography variant={'body2'} className={s.forgot_password}>
                Forgot password?
              </Typography>
            </Button>
          </div>
          {/*link*/}
          <Button type={'submit'} fullWidth={true} className={s.submit_button}>
            <Typography variant={'subtitle2'} className={s.submit_button_text}>
              Sign in
            </Typography>
          </Button>
          <Typography variant={'body2'} className={s.dont_have_account}>
            {`Don't have an account?`}
          </Typography>
          {/*link*/}
          <div className={s.sign_up_button_container}>
            <Button variant={'link'}>
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