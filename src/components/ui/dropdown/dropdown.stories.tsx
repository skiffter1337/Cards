import { Meta } from '@storybook/react'

import AvatarImg from '../../../images/png/avatar.png'

import { AvatarDropDown } from './avatarDrowpDown'
import { Dropdown } from './dropdown.tsx'
import { ToolsDropDown } from './toolsDropDown'

const meta = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Dropdown>

export default meta

export const AvatarDropdownMenu = {
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
        <AvatarDropDown
          email={'j&johnson@gmail.com'}
          name={'Ivan'}
          src={AvatarImg}
          logout={() => {}}
        />
      </div>
    )
  },
}

export const ToolsDropDownMenu = {
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
        <ToolsDropDown learnHandler={() => {}} editHandler={() => {}} deleteHandler={() => {}} />
      </div>
    )
  },
}
