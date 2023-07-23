import { NavLink } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'
import { useSignUpMutation } from '../../../app/services'
import { Button } from '../../ui/button'
import { Card } from '../../ui/card'
import { ControlledInput } from '../../ui/controlled'
import { Typography } from '../../ui/typography'

import s from './signUpForm.module.scss'
import { useSignUpFrom } from './useSignUpFrom.ts'

export const SignUpForm = () => {
  const [signUp, { error }] = useSignUpMutation()

  const { handleSubmit, control } = useSignUpFrom()
  const onSubmit = handleSubmit(data => {
    signUp(data)
    if (isBadRequestError(error)) {
      return toast(error.data.errorMessages[0], {
        position: 'bottom-left',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
        type: 'error',
      })
    }
  })

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
          <div className={s.sign_in_button_container}>
            <Button variant={'link'} as={NavLink} to={'/login'}>
              <Typography variant={'subtitle1'} className={s.sign_in_button_text}>
                Sign in
              </Typography>
            </Button>
          </div>
        </form>
        <ToastContainer />
      </Card>
    </>
  )
}

export function isBadRequestError(error: unknown): error is BadRequestError {
  return (
    !!error &&
    typeof error === 'object' &&
    'data' in error &&
    typeof error.data === 'object' &&
    !!error.data &&
    'errorMessages' in error.data &&
    Array.isArray(error.data.errorMessages)
  )
}

type BadRequestError = {
  data: {
    errorMessages: Array<string>
  }
}
