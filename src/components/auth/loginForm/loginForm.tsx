import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '../../ui/button'
import { ControlledInput } from '../../ui/controlled'
import { ControlledCheckbox } from '../../ui/controlled/controlledCheckbox.tsx'

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
    <form
      onSubmit={onSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
      }}
    >
      <ControlledInput id="login" label="Login" control={control} name={'login'} />
      <ControlledInput id="email" label="Email" control={control} name={'email'} />
      <ControlledInput
        id={'password'}
        label={'Password'}
        type={'password'}
        control={control}
        name={'password'}
      />
      <ControlledCheckbox label={'Remember me'} name={'rememberMe'} control={control} />

      <Button type={'submit'}>Submit</Button>
    </form>
  )
}
