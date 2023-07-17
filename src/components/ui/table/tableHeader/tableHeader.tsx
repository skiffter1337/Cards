import { ComponentPropsWithoutRef, FC, MouseEventHandler } from 'react'

import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons'

import { Typography } from '../../typography'
import { Column, Sort } from '../table.stories.tsx'
import { Table } from '../table.tsx'

import s from './tableHeader.module.scss'
const dataAttributes = {
  sortable: 'data-sortable',
  name: 'data-name',
} as const

export const TableHeader: FC<
  Omit<
    ComponentPropsWithoutRef<'thead'> & {
      columns: Column[]
      sort?: Sort
      onSort: (sort: Sort) => void
    },
    'children'
  >
> = ({ columns, sort, onSort, ...restProps }) => {
  const handleSort: MouseEventHandler<HTMLTableCellElement> = event => {
    const sortable = event.currentTarget.getAttribute(dataAttributes.sortable)
    const key = event.currentTarget.getAttribute(dataAttributes.name)

    if (key === null) throw new Error('No data-name found!')
    if (!sortable || sortable !== 'true') return

    if (key !== sort?.key) {
      return onSort({ key, direction: 'asc' })
    }

    if (sort.direction === 'asc') return onSort({ key, direction: 'desc' })

    onSort(null)
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
        key={title}
        onClick={handleSort}
        className={s.head_cell}
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
                <ChevronDownIcon color={'var(--color-light-100)'} />
              )}
            </span>
          )}
        </div>
      </Table.HeadCell>
    )
  })

  return (
    <Table.Head {...restProps}>
      <Table.Row>{mappedHeadCells}</Table.Row>
    </Table.Head>
  )
}
