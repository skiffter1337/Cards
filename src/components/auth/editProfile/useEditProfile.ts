import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const schema = z.object({
  nickName: z
    .string()
    .trim()
    .nonempty('Enter nickname')
    .min(3, 'Nickname must be at least 8 symbols'),
})

type Form = z.infer<typeof schema>
export const useEditProfile = () => {
  return useForm<Form>({
    resolver: zodResolver(schema),
    defaultValues: { nickName: '' },
    mode: 'onSubmit',
  })
}
