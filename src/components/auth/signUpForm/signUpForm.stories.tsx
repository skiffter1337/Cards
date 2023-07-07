import { Meta, StoryObj } from '@storybook/react'

import { SignUpForm } from './signUpForm.tsx'

const meta = {
  title: 'Auth/SignUpForm',
  component: SignUpForm,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof SignUpForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
