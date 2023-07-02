import { Meta } from '@storybook/react'

import AvatarImg from '../../../images/png/Ellipse 54.png'

import { Dropdown } from './dropdown.tsx'
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
        <Dropdown
          changeIsLoggedIn={() => {}}
          email={'example@gmail.com'}
          userName={'Ivan'}
          avatar={AvatarImg}
        />
      </div>
    )
  },
}
