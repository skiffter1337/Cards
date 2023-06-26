import type { Meta, StoryObj } from '@storybook/react'

import { Input } from './'

const meta = {
  title: 'Components/Button',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary', 'link'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Secondary123: Story = {}
