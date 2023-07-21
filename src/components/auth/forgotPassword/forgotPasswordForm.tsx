import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { NavLink } from 'react-router-dom'
import { z } from 'zod'

import { Button } from '../../ui/button'
import { Card } from '../../ui/card'
import { ControlledInput } from '../../ui/controlled'
import { Typography } from '../../ui/typography'

import s from './forgotPasswordForm.module.scss'

const schema = z.object({
  email: z.string().trim().email('Invalid email').nonempty('Enter email'),
})

type Form = z.infer<typeof schema>
export const ForgotPasswordForm = () => {
  const { handleSubmit, control, formState } = useForm<Form>({
    resolver: zodResolver(schema),
    defaultValues: { email: '' },
    mode: 'onSubmit',
  })

  console.log(formState.errors)
  const onSubmit = handleSubmit(data => console.log(data))

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
