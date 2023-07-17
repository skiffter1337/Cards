import { Meta, StoryObj } from '@storybook/react'

import { FriendDecks } from './friendDecks.tsx'

const meta = {
  title: 'Pages/FriendDecks',
  component: FriendDecks,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof FriendDecks>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
