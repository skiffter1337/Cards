import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const schema = z.object({
  name: z
    .string()
    .trim()
    .nonempty('Enter nickname')
    .min(3, 'Nickname must be at least 3 symbols')
    .max(15, 'Max nickname length is 15 symbols!'),
})

type Form = z.infer<typeof schema>
export const useEditProfile = () => {
  return useForm<Form>({
    resolver: zodResolver(schema),
    defaultValues: { name: '' },
    mode: 'onSubmit',
  })
}
