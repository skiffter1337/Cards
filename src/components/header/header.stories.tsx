import type { Meta, StoryObj } from '@storybook/react'

import AvatarImg from '../../images/png/avatar.png'

import { Header } from './'

const meta = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  args: {
    userName: 'Ivan',
    avatar: AvatarImg,
    email: 'example@gmail.com',
    changeIsLoggedIn: () => {},
    isLoggedIn: true,
  },
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const LoggedInHeader: Story = {}
export const LoggedOutHeader: Story = { args: { isLoggedIn: false } }
