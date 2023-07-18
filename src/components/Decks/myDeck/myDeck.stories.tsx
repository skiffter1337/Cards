import { Meta, StoryObj } from '@storybook/react'

import { MyDeck } from './myDeck.tsx'

const meta = {
  title: 'Pages/MyDeck',
  component: MyDeck,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div style={{ width: '1280px', height: '816px' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {},
} satisfies Meta<typeof MyDeck>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
