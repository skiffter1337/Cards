import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '../../ui/button'
import { Card } from '../../ui/card'
import { ControlledInput } from '../../ui/controlled'
import { Typography } from '../../ui/typography'

import s from './createNewPassword.module.scss'

const schema = z.object({
  password: z
    .string()
    .trim()
    .nonempty('Enter password')
    .min(8, 'Password must be at least 8 symbols'),
})

type Form = z.infer<typeof schema>
export const CreateNewPassword = () => {
  const { handleSubmit, control, formState } = useForm<Form>({
    resolver: zodResolver(schema),
    mode: 'onSubmit',
  })

  console.log(formState.errors)
  const onSubmit = handleSubmit(data => console.log(data))

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
