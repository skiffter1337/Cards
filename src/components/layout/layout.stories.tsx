import type { Meta, StoryObj } from '@storybook/react'

import AvatarImg from './../../images/png/avatar.png'
import { Layout } from './layout.tsx'

const meta = {
  title: 'Components/Layout',
  component: Layout,
  tags: ['autodocs'],
  args: {
    userName: 'Ivan',
    avatar: AvatarImg,
    email: 'example@gmail.com',
    changeIsLoggedIn: () => {},
    isLoggedIn: true,
  },
} satisfies Meta<typeof Layout>

export default meta
type Story = StoryObj<typeof meta>

export const LayoutDefault: Story = {}
