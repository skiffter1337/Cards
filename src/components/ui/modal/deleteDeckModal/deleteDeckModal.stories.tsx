import { Meta, StoryObj } from '@storybook/react'

import { TrashOutlined } from '../../../../images/svg/icons/trashOutlined'

import { DeleteDeckModal } from './deleteDeckModal.tsx'

const meta = {
  title: 'Modal/DeleteDeckModal',
  component: DeleteDeckModal,
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
    trigger: <TrashOutlined />,
  },
} satisfies Meta<typeof DeleteDeckModal>

export default meta
type Story = StoryObj<typeof meta>

export const DeleteDeckModalDefault: Story = {
  args: {
    width: 'wide',
  },
}
