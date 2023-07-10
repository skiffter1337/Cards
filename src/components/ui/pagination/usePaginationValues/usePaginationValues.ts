import { useMemo, useState } from 'react'

import { TableDataType } from '../../paginationTestTable/paginationTestTable.tsx'

export const usePaginationValues = (
  data: TableDataType[],
  currentPageValues: number,
  pageSizeValue: number
) => {
  const [currentPage, setCurrentPage] = useState<number>(currentPageValues)
  const [pageSize, setPageSize] = useState<number>(pageSizeValue)

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize
    const lastPageIndex = firstPageIndex + pageSize

    return data.slice(firstPageIndex, lastPageIndex)
  }, [currentPage, pageSize])

  return { currentTableData, currentPage, pageSize, setCurrentPage, setPageSize }
}
