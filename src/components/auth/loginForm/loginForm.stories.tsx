import { Meta, StoryObj } from '@storybook/react'

import { LoginForm } from './loginForm.tsx'

const meta = {
  title: 'Auth/LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof LoginForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
