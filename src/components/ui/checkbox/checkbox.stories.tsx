import { Meta, StoryObj } from '@storybook/react'

import { CheckboxItem } from './checkbox.tsx'

const meta = {
  title: 'Components/Checkbox',
  component: CheckboxItem,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    checked: { control: 'boolean' },
    required: { control: 'boolean' },
  },
} satisfies Meta<typeof CheckboxItem>

export default meta
type Story = StoryObj<typeof meta>

export const CheckboxDefault: Story = {
  args: {},
}
export const CheckboxWithLabel: Story = {
  args: {
    label: 'Check me',
  },
}
