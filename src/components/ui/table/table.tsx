import { FC } from 'react'

import { Pagination } from '../pagination'
import { usePaginationValues } from '../pagination/usePaginationValues/usePaginationValues.ts'

type TableType = {
  data: TableDataType[]
}
export type TableDataType = {
  id: number
  firstName: string
  lastName: string
  email: string
  phone: string
}
export const Table: FC<TableType> = ({ data }) => {
  const { currentTableData, setCurrentPage, setPageSize, pageSize, currentPage } =
    usePaginationValues(data, 1, 10)

  return (
    <>
      <table style={{ width: '600px', marginBottom: '60px' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>FIRST NAME</th>
            <th>LAST NAME</th>
            <th>EMAIL</th>
            <th>PHONE</th>
          </tr>
        </thead>
        <tbody>
          {currentTableData.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={pageSize}
        onPageChange={(page: number) => setCurrentPage(page)}
        onPageSizeChange={(size: number) => setPageSize(size)}
      />
    </>
  )
}
