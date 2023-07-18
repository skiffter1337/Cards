import { Meta, StoryObj } from '@storybook/react'

import { Button } from '../../button'
import { Typography } from '../../typography'

import { AddNewCardModal } from './addNewCardModal.tsx'

const meta = {
  title: 'Modal/AddNewCardModal',
  component: AddNewCardModal,
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
          Add New Card
        </Typography>
      </Button>
    ),
  },
} satisfies Meta<typeof AddNewCardModal>

export default meta
type Story = StoryObj<typeof meta>

export const AddNewCardDefault: Story = {
  args: {
    width: 'wide',
  },
}
