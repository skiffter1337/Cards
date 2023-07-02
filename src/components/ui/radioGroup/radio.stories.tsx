import { Meta, StoryObj } from '@storybook/react'

import { RadioGroup } from './radioGroup.tsx'

const meta = {
  title: 'Components/Radio',
  component: RadioGroup,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof RadioGroup>

export default meta

type Story = StoryObj<typeof meta>
export const RadioDefault: Story = {
  args: {
    radioGroup: [
      { id: 'r1', value: 'option1', title: 'Option1', disabled: false, required: false },
      { id: 'r2', value: 'option2', title: 'Option2', disabled: false, required: false },
      { id: 'r3', value: 'option3', title: 'Option3', disabled: false, required: false },
    ],
    ariaLabel: 'Radio Group',
    defaultValue: 'option2',
    callback: () => {},
  },
}
