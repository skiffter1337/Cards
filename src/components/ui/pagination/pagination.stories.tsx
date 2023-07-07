import { Meta, StoryObj } from '@storybook/react'

import data from './../../../data/mock-data.json'
import { Pagination } from './pagination.tsx'
import { usePaginationValues } from './usePaginationValues/usePaginationValues.ts'

const meta = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

export const Default = {
  render: () => {
    const { setCurrentPage, setPageSize, pageSize, currentPage } = usePaginationValues(data, 1, 10)

    return (
      <>
        <Pagination
          currentPage={currentPage}
          totalCount={data.length}
          pageSize={pageSize}
          onPageChange={(page: number) => setCurrentPage(page)}
          onPageSizeChange={(size: number) => setPageSize(size)}
        />
      </>
    )
  },
  args: {},
}
