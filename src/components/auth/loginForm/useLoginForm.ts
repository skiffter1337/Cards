import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

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

export const useLoginForm = () => {
  return useForm<Form>({
    resolver: zodResolver(schema),
    mode: 'onSubmit',
  })
}
