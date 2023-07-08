import { FC } from 'react'

import { KeyboardArrowLeft } from '../../../images/svg/icons/keyboardAwrrowLeft'
import { KeyBoardArrowRight } from '../../../images/svg/icons/keyboardAwrrowRight'
import { Select } from '../select'
import { Typography } from '../typography'

import s from './pagination.module.scss'
import { DOTS, usePagination } from './usePagination'

export type PaginationPropsType = {
  totalCount: number
  currentPage: number
  pageSize: number
  onPageChange: (page: number) => void
  onPageSizeChange: (size: number) => void
  siblingCount?: number
  className?: string
}

export const Pagination: FC<PaginationPropsType> = ({
  totalCount,
  currentPage,
  pageSize,
  onPageChange,
  onPageSizeChange,
  siblingCount = 1,
}) => {
  const paginationRange = usePagination({ currentPage, totalCount, siblingCount, pageSize })

  if (currentPage === 0 || !paginationRange || paginationRange.length < 2) {
    return null
  }
  const onPageSizeChangeHandler = (size: string) => onPageSizeChange(Number(size))

  const onNext = () => onPageChange(currentPage + 1)
  const onPrevious = () => onPageChange(currentPage - 1)

  let lastPage = paginationRange[paginationRange.length - 1]
  let firstPage = paginationRange[0]

  return (
    <div className={s.pagination}>
      <ul className={s.container}>
        <li className={s.item}>
          <button onClick={onPrevious} className={s.arrow} disabled={currentPage === firstPage}>
            <KeyboardArrowLeft
              color={currentPage === firstPage ? 'var(--color-dark-100)' : 'var(--color-light-100)'}
            />
          </button>
        </li>
        {paginationRange.map((pageNumber, index) => {
          if (pageNumber === DOTS) {
            return (
              <li key={index} className={`${s.item} ${s.dots}`}>
                &#8230;
              </li>
            )
          }

          return (
            <li
              key={index}
              className={`${s.item} ${pageNumber === currentPage ? s.selected : ''}`}
              onClick={() => onPageChange(Number(pageNumber))}
            >
              <Typography
                variant={'body2'}
                className={`${s.item_content} ${pageNumber === currentPage ? s.selected : ''}`}
              >
                {pageNumber}
              </Typography>
            </li>
          )
        })}

        <li className={s.item}>
          <button onClick={onNext} className={s.arrow} disabled={currentPage === lastPage}>
            <KeyBoardArrowRight
              color={currentPage === lastPage ? 'var(--color-dark-100)' : 'var(--color-light-100)'}
            />
          </button>
        </li>
      </ul>
      <div className={s.page_size_panel}>
        <Typography variant={'body2'} className={s.page_size_panel_text}>
          {'Показать '}
        </Typography>
        <div className={s.select}>
          <Select
            ariaLabel={'pagination page size select'}
            selectItems={[
              { id: '1', value: '10', title: '10', disabled: false },
              { id: '2', value: '20', title: '20', disabled: false },
              { id: '3', value: '30', title: '30', disabled: false },
              { id: '4', value: '40', title: '40', disabled: false },
              { id: '5', value: '50', title: '50', disabled: false },
              { id: '6', value: '100', title: '100', disabled: false },
            ]}
            size={'small'}
            callback={onPageSizeChangeHandler}
          ></Select>
        </div>

        <Typography variant={'body2'} className={s.page_size_panel_text}>
          {'на странице'}
        </Typography>
      </div>
    </div>
  )
}
