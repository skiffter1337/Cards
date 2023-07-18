import { Meta, StoryObj } from '@storybook/react'

import { Button } from '../../button'
import { Typography } from '../../typography'

import { AddNewDeckModal } from './addNewDeckModal.tsx'

const meta = {
  title: 'Modal/AddNewDeckModal',
  component: AddNewDeckModal,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div style={{ margin: '3em', display: 'flex', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    width: {
      options: ['wide', 'narrow'],
      control: 'radio',
    },
  },
  args: {
    trigger: (
      <Button variant={'primary'}>
        <Typography variant={'subtitle2'} style={{ color: 'var(--color-light-100' }}>
          Add New Deck
        </Typography>
      </Button>
    ),
  },
} satisfies Meta<typeof AddNewDeckModal>

export default meta
type Story = StoryObj<typeof meta>

export const AddNewDeckDefault: Story = {
  args: {
    width: 'wide',
  },
}
