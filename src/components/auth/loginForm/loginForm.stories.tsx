import { Meta, StoryObj } from '@storybook/react'

import { LoginForm } from './loginForm.tsx'

const meta = {
  title: 'Components/LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    checked: { control: 'boolean' },
    required: { control: 'boolean' },
  },
} satisfies Meta<typeof LoginForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
