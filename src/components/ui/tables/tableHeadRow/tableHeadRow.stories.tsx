import type { Meta, StoryObj } from '@storybook/react'

import { TableHeadRow } from './tableHeadRow.tsx'

const meta = {
  title: 'Components/TableHeadRow',
  component: TableHeadRow,
  tags: ['autodocs'],
} satisfies Meta<typeof TableHeadRow>

export default meta
type Story = StoryObj<typeof meta>

export const TableHeadRowDefault: Story = {
  args: {
    title: 'Name',
    withIcon: true,
  },
}
