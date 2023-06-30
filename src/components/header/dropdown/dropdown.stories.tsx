import { Meta } from '@storybook/react'

import { Dropdown } from './Dropdown.tsx'

const meta = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Dropdown>

export default meta

export const DefaultDropdown = {
  render: () => {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          height: '300px',
        }}
      >
        <Dropdown />
      </div>
    )
  },
}
