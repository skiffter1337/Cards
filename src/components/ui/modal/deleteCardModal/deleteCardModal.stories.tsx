import { Meta, StoryObj } from '@storybook/react'

import { TrashOutlined } from '../../../../images/svg/icons/trashOutlined'

import { DeleteCardModal } from './deleteCardModal.tsx'

const meta = {
  title: 'Modal/DeleteCardModal',
  component: DeleteCardModal,
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
} satisfies Meta<typeof DeleteCardModal>

export default meta
type Story = StoryObj<typeof meta>

export const DeleteCardModalDefault: Story = {
  args: {
    width: 'wide',
  },
}
