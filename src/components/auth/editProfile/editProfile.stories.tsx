import { Meta, StoryObj } from '@storybook/react'

import AvatarImg from './../../../images/png/Ellipse 54.png'
import { EditProfile } from './editProfile.tsx'
const meta = {
  title: 'Auth/EditProfile',
  component: EditProfile,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof EditProfile>

//123
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { avatar: AvatarImg, email: 'j&johnson@gmail.com', userName: 'Ivan' },
}
