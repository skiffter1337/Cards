import type { Meta, StoryObj } from '@storybook/react'

import { Grade } from './grade.tsx'

const meta = {
  title: 'Components/Grade',
  component: Grade,
  tags: ['autodocs'],
} satisfies Meta<typeof Grade>

export default meta
type Story = StoryObj<typeof meta>

export const GradeDefault: Story = {
  args: { initialGrade: 3 },
}
