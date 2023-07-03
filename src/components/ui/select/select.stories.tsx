import { Meta, StoryObj } from '@storybook/react'

import { Select } from './select.tsx'

const meta = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: 'input',
    label: 'Default',
    placeholder: 'Input',
  },
}
