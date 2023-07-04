import { useMemo, useState } from 'react'

import { Pagination } from '../pagination'

import data from './data/mock-data.json'

export const Table = () => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [pageSize, setPageSize] = useState<number>(10)

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize
    const lastPageIndex = firstPageIndex + pageSize

    return data.slice(firstPageIndex, lastPageIndex)
  }, [currentPage])

  // To Do: Add rerender when pageSize changing
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
          {currentTableData.map(item => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
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
