import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const schema = z.object({
  email: z.string().trim().email('Invalid email').nonempty('Enter email'),
})

type Form = z.infer<typeof schema>
export const useForgotPassword = () => {
  return useForm<Form>({
    resolver: zodResolver(schema),
    defaultValues: { email: '' },
    mode: 'onSubmit',
  })
}
