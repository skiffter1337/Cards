import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '../../ui/button'
import { Card } from '../../ui/card'
import { ControlledInput } from '../../ui/controlled'
import { Typography } from '../../ui/typography'

import s from './signUpForm.module.scss'

const schema = z
  .object({
    email: z.string().trim().email('Invalid email').nonempty('Enter email'),
    password: z
      .string()
      .trim()
      .nonempty('Enter password')
      .min(8, 'Password must be at least 8 symbols'),
    confirmPassword: z.string().trim().min(8),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'The passwords did not match',
    path: ['confirmPassword'],
  })

type Form = z.infer<typeof schema>
export const SignUpForm = () => {
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
          Sign Up
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
          <ControlledInput
            id={'confirmPassword'}
            label={'Confirm password'}
            type={'password'}
            control={control}
            name={'confirmPassword'}
            className={s.text_field_last}
          />
          <Button type={'submit'} fullWidth={true} className={s.submit_button}>
            <Typography variant={'subtitle2'} className={s.submit_button_text}>
              Sign Up
            </Typography>
          </Button>
          <Typography variant={'body2'} className={s.have_account}>
            {'Already have an account?'}
          </Typography>
          {/*link*/}
          <div className={s.sign_in_button_container}>
            <Button variant={'link'}>
              <Typography variant={'subtitle1'} className={s.sign_in_button_text}>
                Sign in
              </Typography>
            </Button>
          </div>
          {/*link*/}
        </form>
      </Card>
    </>
  )
}
