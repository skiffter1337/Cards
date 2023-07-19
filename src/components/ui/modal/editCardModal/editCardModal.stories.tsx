import { Meta, StoryObj } from '@storybook/react'

import { Button } from '../../button'
import { Typography } from '../../typography'

import { EditCardModal } from './editCardModal.tsx'

const meta = {
  title: 'Modal/EditCardModal',
  component: EditCardModal,
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
          Edit Card
        </Typography>
      </Button>
    ),
  },
} satisfies Meta<typeof EditCardModal>

export default meta
type Story = StoryObj<typeof meta>

export const EditCardDefault: Story = {
  args: {
    width: 'wide',
  },
}
