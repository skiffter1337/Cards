import { Meta, StoryObj } from '@storybook/react'

import { FriendDeck } from './friendDeck.tsx'

const meta = {
  title: 'Pages/FriendDeck',
  component: FriendDeck,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof FriendDeck>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
