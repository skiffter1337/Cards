import { ComponentPropsWithoutRef, FC, MouseEventHandler } from 'react'

import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons'

import { Typography } from '../../typography'
import { Column, Sort } from '../table.stories.tsx'
import { Table } from '../table.tsx'

import s from './../table.module.scss'

const dataAttributes = {
  sortable: 'data-sortable',
  name: 'data-name',
} as const

export const TableHeader: FC<
  Omit<
    ComponentPropsWithoutRef<'thead'> & {
      columns: Column[]
      sort?: Sort
      onSort?: (sort: Sort) => void
    },
    'children'
  >
> = ({ columns, sort, onSort, ...restProps }) => {
  const handleSort: MouseEventHandler<HTMLTableHeaderCellElement> = event => {
    const sortable = event.currentTarget.getAttribute(dataAttributes.sortable)
    const key = event.currentTarget.getAttribute(dataAttributes.name)

    if (key === null) throw new Error('No data-name fround!')
    if (!onSort || !sortable || sortable !== 'true') return

    if (sort?.key !== key) return onSort({ key, direction: 'asc' })

    if (sort.direction === 'desc') return onSort(null)

    return onSort({
      key,
      direction: sort?.direction === 'asc' ? 'desc' : 'asc',
    })
  }

  console.log(sort)

  const mappedHeadCells = columns.map(({ title, key, sortable }) => {
    const showSort = sortable && sort && sort.key === key

    return (
      <Table.HeadCell
        {...{
          [dataAttributes.sortable]: sortable,
          [dataAttributes.name]: key,
        }}
        key={key}
        onClick={handleSort}
      >
        <div className={s.head_cell_block}>
          <Typography variant={'subtitle2'} className={s.title}>
            {title}
          </Typography>
          {showSort && (
            <span>
              {sort.direction === 'asc' ? (
                <ChevronUpIcon color={'var(--color-light-100)'} />
              ) : (
                <ChevronUpIcon color={'var(--color-light-100)'} className={s.chevron_down} />
              )}
            </span>
          )}
        </div>
      </Table.HeadCell>
    )
  })

  return (
    <Table.Head {...restProps} className={s.container}>
      <Table.Row className={s.head_row}>{mappedHeadCells}</Table.Row>
    </Table.Head>
  )
}
