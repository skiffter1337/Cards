import { Meta, StoryObj } from '@storybook/react'

import { EditOutlined } from '../../../../images/svg/icons/editOutlined/editOutlined.tsx'

import { EditDeckModal } from './editDeckModal.tsx'

const meta = {
  title: 'Modal/EditDeckModal',
  component: EditDeckModal,
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
    trigger: <EditOutlined />,
  },
} satisfies Meta<typeof EditDeckModal>

export default meta
type Story = StoryObj<typeof meta>

export const EditDeckDefault: Story = {
  args: {
    width: 'wide',
  },
}
