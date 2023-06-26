import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from './'

const meta = {
  title: 'Components/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: [
        'Large',
        'H1',
        'H2',
        'H3',
        'Body1',
        'Subtitle1',
        'Body2',
        'Subtitle2',
        'Caption',
        'Overline',
        'Link1',
        'Link2',
      ],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const Large: Story = {
  args: {
    variant: 'Large',
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
  },
}

export const H1: Story = {
  args: {
    variant: 'H1',
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
  },
}

export const H2: Story = {
  args: {
    variant: 'H2',
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
  },
}

export const H3: Story = {
  args: {
    variant: 'H3',
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
  },
}

export const Body1: Story = {
  args: {
    variant: 'Body1',
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
  },
}
export const Subtitle1: Story = {
  args: {
    variant: 'Subtitle1',
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
  },
}
export const Body2: Story = {
  args: {
    variant: 'Body2',
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
  },
}

export const Subtitle2: Story = {
  args: {
    variant: 'Subtitle2',
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
  },
}

export const Caption: Story = {
  args: {
    variant: 'Caption',
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
  },
}

export const Overline: Story = {
  args: {
    variant: 'Overline',
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
  },
}
export const Link1: Story = {
  args: {
    variant: 'Link1',
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
  },
}
export const Link2: Story = {
  args: {
    variant: 'Link2',
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
  },
}
