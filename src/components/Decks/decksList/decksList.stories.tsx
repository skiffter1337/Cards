import { Meta, StoryObj } from '@storybook/react'

import { DecksList } from './decksList.tsx'

const meta = {
  title: 'Pages/decksList',
  component: DecksList,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof DecksList>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
