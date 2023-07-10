import type { Meta, StoryObj } from '@storybook/react'

import { ColumnContent } from './columnContent.tsx'

const meta = {
  title: 'Components/Table/ColumnContent',
  component: ColumnContent,
  tags: ['autodocs'],
} satisfies Meta<typeof ColumnContent>

export default meta
type Story = StoryObj<typeof meta>

export const ColumnContentDefault: Story = {
  args: {
    title: 'Name',
  },
}
export const ColumnContentWithCheckbox: Story = {
  args: {
    title: 'Name',
    check: true,
  },
}
export const ColumnContentLeftIcons: Story = {
  args: {
    title: 'Name',
    leftIcons: true,
  },
}

export const ColumnContentALlIcons: Story = {
  args: {
    leftIcons: true,
    play: true,
  },
}

export const ColumnContentWithImage: Story = {
  args: {
    title: 'Name',
    image: 'https://placehold.co/118x48',
  },
}
