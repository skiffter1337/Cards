import { Meta, StoryObj } from '@storybook/react'

import { CreateNewPassword } from './createNewPassword.tsx'

const meta = {
  title: 'Auth/CreateNewPassword',
  component: CreateNewPassword,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CreateNewPassword>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
