import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const schema = z.object({
  editDeck: z
    .string()
    .trim()
    .nonempty('Enter deck name')
    .min(3, 'Deck name must be at least 3 symbols')
    .max(20, 'Max length of deck name must be less than 20 symbols'),
  isPrivate: z.boolean().optional(),
})

type Form = z.infer<typeof schema>

export const useEditDeckForm = () => {
  return useForm<Form>({
    resolver: zodResolver(schema),
    defaultValues: { editDeck: '', isPrivate: false },
    mode: 'onSubmit',
  })
}
