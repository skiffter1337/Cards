import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const schema = z.object({
  password: z
    .string()
    .trim()
    .nonempty('Enter password')
    .min(8, 'Password must be at least 8 symbols'),
})

type Form = z.infer<typeof schema>

export const useCreateNewPassword = () => {
  return useForm<Form>({
    resolver: zodResolver(schema),
    defaultValues: { password: '' },
    mode: 'onSubmit',
  })
}
