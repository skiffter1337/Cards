import { useState } from 'react'

import { Meta } from '@storybook/react'

import AvatarImg from '../../../images/png/avatar.png'

import { EditProfile } from './editProfile.tsx'
const meta = {
  title: 'Auth/EditProfile',
  component: EditProfile,
  tags: ['autodocs'],
  argTypes: {},
  decorators: [
    Story => (
      <div style={{ margin: '3em', display: 'flex', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof EditProfile>

// 123
export default meta

export const EditProfileDefault = {
  render: () => {
    const [name, setName] = useState('Ivan')
    const changeName = (newName: string) => {
      setName(newName)
    }

    const [avatar, setAvatar] = useState(AvatarImg)

    const changeAvatar = (newAvatar: string) => {
      setAvatar(newAvatar)
    }

    return (
      <>
        <EditProfile
          avatar={avatar}
          userName={name}
          email={'lalala@mail.com'}
          changeAvatar={changeAvatar}
          changeName={changeName}
        />
      </>
    )
  },
}
