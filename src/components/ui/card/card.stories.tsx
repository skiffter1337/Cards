import type { Meta, StoryObj } from '@storybook/react'

import { Card } from './Card.tsx'

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const CardDefault: Story = {
  args: {
    children: '123',
  },
}
