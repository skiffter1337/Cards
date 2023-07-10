import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { ColumnName } from './columnName.tsx'

const meta = {
  title: 'Components/Table/ColumnName.',
  component: ColumnName,
  tags: ['autodocs'],
} satisfies Meta<typeof ColumnName>

export default meta
type Story = StoryObj<typeof meta>

export const ColumnNameDefault: Story = {
  args: {
    title: 'Name',
  },
}

export const ColumnNameWithIcon = {
  render: () => {
    const [currentSort, setCurrentSort] = useState<'sortUp' | 'sortDown'>('sortUp')
    const onClickSortHandler = () => {
      currentSort === 'sortUp' ? setCurrentSort('sortDown') : setCurrentSort('sortUp')
    }

    return (
      <>
        <ColumnName
          title={'Name'}
          withIcon={true}
          callback={onClickSortHandler}
          currentSort={currentSort}
        />
      </>
    )
  },
  args: {
    title: 'Name',
    withIcon: true,
    currentSort: 'sortUp',
  },
}
