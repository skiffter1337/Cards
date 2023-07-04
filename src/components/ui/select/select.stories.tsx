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
    selectItems: [
      { id: '1', value: 'apple', title: 'Apple', disabled: false },
      { id: '2', value: 'banana', title: 'Banana', disabled: true },
      { id: '3', value: 'blueberry', title: 'Blueberry', disabled: false },
      { id: '4', value: 'grapes', title: 'Grapes', disabled: false },
      { id: '5', value: 'pineapple', title: 'Pineapple', disabled: true },
    ],
    placeholder: 'Select-box',
    ariaLabel: 'Food selector',
    label: 'Select',
    disabled: false,
    size: 'large',
  },
}
