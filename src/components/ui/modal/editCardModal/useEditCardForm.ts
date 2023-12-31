import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const schema = z.object({
  question: z
    .string()
    .trim()
    .nonempty('Enter question')
    .min(3, 'Question must be at least 3 symbols')
    .max(20, 'Max length of question must be less than 20 symbols'),
  answer: z
    .string()
    .trim()
    .nonempty('Enter answer')
    .max(20, 'Max length of answer must be less than 20 symbols'),
})

type Form = z.infer<typeof schema>

export const useEditCardForm = () => {
  return useForm<Form>({
    resolver: zodResolver(schema),
    defaultValues: { question: '', answer: '' },
    mode: 'onSubmit',
  })
}
