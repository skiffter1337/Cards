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
  login: z.string().trim().nonempty('Enter login').min(3, 'Login must be at least 3 symbols'),
  password: z
    .string()
    .trim()
    .nonempty('Enter password')
    .min(8, 'Password must be at least 8 symbols'),
  rememberMe: z.boolean().optional(),
  email: z.string().trim().email('Invalid email').nonempty('Enter email'),
})

type Form = z.infer<typeof schema>
export const LoginForm = () => {
  const { handleSubmit, control, formState } = useForm<Form>({
    resolver: zodResolver(schema),
    mode: 'onSubmit',
  })

  console.log(formState.errors)
  const onSubmit = handleSubmit(data => console.log(data))

  return (
    <>
      <Card className={s.card}>
        <Typography variant={'large'} className={s.title}>
          Sign in
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
          <div className={s.forgot_password_block}>
            <Typography variant={'body2'} className={s.forgot_password}>
              Forgot password?
            </Typography>
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
            <Button variant={'link'} className={s.sign_up_button}>
              Sign up
            </Button>
          </div>
        </form>
      </Card>
    </>
  )
}
