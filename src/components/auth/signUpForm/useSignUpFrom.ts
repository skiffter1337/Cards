import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

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

export const useSignUpFrom = () => {
  return useForm<Form>({
    resolver: zodResolver(schema),
    mode: 'onSubmit',
  })
}
