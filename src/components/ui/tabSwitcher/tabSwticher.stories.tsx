import type { Meta, StoryObj } from '@storybook/react'

import { TabSwitcher } from './tabSwitcher.tsx'

const meta = {
  title: 'Components/TabSwitcher',
  component: TabSwitcher,
  tags: ['autodocs'],
} satisfies Meta<typeof TabSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const TabSwitcherDefault: Story = {
  args: {
    label: 'Title',
    tabs: [
      { value: 'tab1', text: 'Switcher', disabled: false },
      { value: 'tab2', text: 'Switcher', disabled: false },
      { value: 'tab3', text: 'Switcher', disabled: false },
    ],
  },
}
