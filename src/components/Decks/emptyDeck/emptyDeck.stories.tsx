import { Meta, StoryObj } from '@storybook/react'

import { EmptyDeck } from './emptyDeck.tsx'

const meta = {
  title: 'Pages/EmptyDeck',
  component: EmptyDeck,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof EmptyDeck>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
