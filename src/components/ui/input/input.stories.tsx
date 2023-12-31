import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { Input } from './input.tsx'

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    errorMessage: { control: 'text' },
    search: { control: 'boolean' },
    type: { control: 'text' },
    onClearClick: {},
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: 'input',
    label: 'Default',
    placeholder: 'Input',
  },
}

export const WithIconsRight: Story = {
  args: {
    id: 'input',
    label: 'WithIconsRight',
    placeholder: 'Input',
    type: 'password',
  },
}

export const Search = {
  render: () => {
    const [text, setText] = useState('')

    return (
      <>
        <Input
          id={'input1'}
          search={true}
          label="Search"
          placeholder="Input"
          value={text}
          onChange={e => setText(e.currentTarget.value)}
          onClearClick={() => setText('')}
        />
      </>
    )
  },
  args: {
    placeholder: '',
    search: true,
  },
}
