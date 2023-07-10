import { Meta, StoryObj } from '@storybook/react'

import { ForgotPasswordForm } from './forgotPasswordForm.tsx'

const meta = {
  title: 'Auth/ForgotPasswordForm',
  component: ForgotPasswordForm,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ForgotPasswordForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
