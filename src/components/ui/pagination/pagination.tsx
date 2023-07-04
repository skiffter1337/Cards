import { FC } from 'react'

import { DOTS, usePagination } from '../../../hooks/usePagination'
import { KeyboardArrowLeft } from '../../../images/svg/icons/keyboardAwrrowLeft'
import { KeyBoardArrowRight } from '../../../images/svg/icons/keyboardAwrrowRight'
import { Select } from '../select'
import { Typography } from '../typography'

import s from './pagination.module.scss'

export type PaginationPropsType = {
  totalCount: number
  currentPage: number
  pageSize: number
  onPageChange: (page: any) => void
  siblingCount?: number
  className?: string
}

export const Pagination: FC<PaginationPropsType> = ({
  totalCount,
  currentPage,
  pageSize,
  onPageChange,
  siblingCount = 1,
}) => {
  const paginationRange = usePagination({ currentPage, totalCount, siblingCount, pageSize })

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || !paginationRange || paginationRange.length < 2) {
    return null
  }

  const onNext = () => onPageChange(currentPage + 1)
  const onPrevious = () => onPageChange(currentPage - 1)

  let lastPage = paginationRange[paginationRange.length - 1]
  let firstPage = paginationRange[0]

  return (
    <ul className={s.container}>
      {/* Left navigation arrow */}
      <li className={s.item}>
        <button onClick={onPrevious} className={s.arrow} disabled={currentPage === firstPage}>
          <KeyboardArrowLeft
            color={currentPage === firstPage ? 'var(--color-dark-100)' : 'var(--color-light-100)'}
          />
        </button>
      </li>
      {paginationRange.map(pageNumber => {
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === DOTS) {
          return (
            <li key={pageNumber} className={`${s.item} ${s.dots}`}>
              &#8230;
            </li>
          )
        }

        // Render our Page Pills
        return (
          <li
            key={pageNumber}
            className={`${s.item} ${pageNumber === currentPage ? s.selected : ''}`}
            onClick={() => onPageChange(pageNumber)}
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
      {/*  Right Navigation arrow */}
      <li className={s.item}>
        <button onClick={onNext} className={s.arrow} disabled={currentPage === lastPage}>
          <KeyBoardArrowRight
            color={currentPage === lastPage ? 'var(--color-dark-100)' : 'var(--color-light-100)'}
          />
        </button>
      </li>
      <div className={s.page_size_panel}>
        <span>
          <Typography variant={'body2'}>{'Показать'}</Typography>

          {/*<Select*/}
          {/*  ariaLabel={'pagination page size select'}*/}
          {/*  selectItems={[*/}
          {/*    { id: '1', value: 'apple', title: 'Apple', disabled: true },*/}
          {/*    { id: '2', value: 'banana', title: 'Banana', disabled: false },*/}
          {/*    { id: '3', value: 'blueberry', title: 'Blueberry', disabled: false },*/}
          {/*    { id: '4', value: 'grapes', title: 'Grapes', disabled: true },*/}
          {/*    { id: '5', value: 'pineapple', title: 'Pineapple', disabled: false },*/}
          {/*  ]}*/}
          {/*  callback={() => {}}*/}
          {/*></Select>*/}

          <Typography variant={'body2'} className={s.item_content}>
            {'на странице'}
          </Typography>
        </span>
      </div>
    </ul>
  )
}
