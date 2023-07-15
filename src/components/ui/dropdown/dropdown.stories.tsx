import { Meta } from '@storybook/react'

import AvatarImg from '../../../images/png/avatarSmall.png'
import { EditOutlined } from '../../../images/svg/icons/editOutlined/editOutlined.tsx'
import { Logout } from '../../../images/svg/icons/logout'
import { PlayCircle } from '../../../images/svg/icons/playCircle'
import { ProfileIcon } from '../../../images/svg/icons/profile'
import { TrashOutlined } from '../../../images/svg/icons/trashOutlined'
import { More } from '../../../images/svg/more'

import { Dropdown } from './dropdown.tsx'

const meta = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Dropdown>

export default meta

export const DropdownHeader = {
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
          email={'j&johnson@gmail.com'}
          userName={'Ivan'}
          avatar={AvatarImg}
          showUserBlock={true}
          menuItems={[
            {
              icon: <ProfileIcon />,
              text: 'My profile',
              onClick: () => {},
            },
            {
              icon: <Logout />,
              text: 'Sign out',
              onClick: () => {},
            },
          ]}
        />
      </div>
    )
  },
}

export const DropdownTable = {
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
          showUserBlock={false}
          trigger={<More />}
          menuItems={[
            {
              icon: <PlayCircle />,
              text: 'Learn',
              onClick: () => {},
            },
            {
              icon: <EditOutlined />,
              text: 'Edit',
              onClick: () => {},
            },
            {
              icon: <TrashOutlined />,
              text: 'Delete',
              onClick: () => {},
            },
          ]}
        />
      </div>
    )
  },
}
