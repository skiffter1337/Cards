import { useMemo, useState } from 'react'

import { dataWithSort, friendsDeckData } from '../../../data/table-data-test.ts'
import { Grade } from '../grade'

import s from './table.module.scss'
import { Table } from './table.tsx'
import { TableActionButtons } from './tableActionButtons'
import { TableHeader } from './tableHeader'

export default {
  title: 'Tables/Table',
  component: Table,
  tags: ['autodocs'],
  argTypes: {},
}

export const columnsWithSort: Column[] = [
  {
    key: 'title',
    title: 'Name',
    sortable: true,
  },
  {
    key: 'cardsCount',
    title: 'Cards',
    sortable: true,
  },
  {
    key: 'updated',
    title: 'Last Updated',
    sortable: true,
  },
  {
    key: 'createdBy',
    title: 'Created by',
    sortable: true,
  },
  {
    key: 'options',
    title: '',
    sortable: false,
  },
]

export type Sort = {
  key: string
  direction: 'asc' | 'desc'
} | null

export type Column = {
  key: string
  title: string
  sortable: boolean
}
export const WithSort = {
  render: () => {
    const [sort, setSort] = useState<Sort>(null)
    const sortedString = sort ? `${sort.key}-${sort.direction}` : null

    const sortedData = useMemo(() => {
      if (sort?.key) {
        return [...dataWithSort].sort((a, b) => {
          if (a[sort.key] < b[sort.key]) {
            return sort.direction === 'asc' ? -1 : 1
          }
          if (a[sort.key] > b[sort.key]) {
            return sort.direction === 'asc' ? 1 : -1
          }

          return 0
        })
      }

      return dataWithSort
    }, [sort?.key, sort?.direction, dataWithSort])

    console.log(sort, sortedString)

    const tableData = sortedData.map(item => (
      <Table.Row key={item.title}>
        <Table.Cell>{item.title}</Table.Cell>
        <Table.Cell>{item.cardsCount}</Table.Cell>
        <Table.Cell>{item.updated}</Table.Cell>
        <Table.Cell>{item.createdBy}</Table.Cell>
        <Table.Cell>
          <TableActionButtons
            learnHandler={() => {}}
            editHandler={() => {}}
            deleteHandler={() => {}}
          />
        </Table.Cell>
      </Table.Row>
    ))

    return (
      <Table.Root className={s.root}>
        <TableHeader columns={columnsWithSort} sort={sort} onSort={setSort} />
        <Table.Body>{tableData}</Table.Body>
      </Table.Root>
    )
  },
}

export const columnsFriendsDeck: Column[] = [
  {
    key: 'question',
    title: 'Question',
    sortable: true,
  },
  {
    key: 'answer',
    title: 'Answer',
    sortable: true,
  },
  {
    key: 'updated',
    title: 'Last Updated',
    sortable: true,
  },
  {
    key: 'grade',
    title: 'Grade',
    sortable: true,
  },
]
export const FriendsDeckTable = {
  render: () => {
    const [sort, setSort] = useState<Sort>(null)

    const sortedString = sort ? `${sort.key}-${sort.direction}` : null

    console.log(sortedString)

    const sortedData = useMemo(() => {
      if (sort?.key) {
        return [...friendsDeckData].sort((a, b) => {
          if (a[sort.key] < b[sort.key]) {
            return sort.direction === 'asc' ? -1 : 1
          }
          if (a[sort.key] > b[sort.key]) {
            return sort.direction === 'asc' ? 1 : -1
          }

          return 0
        })
      }

      return friendsDeckData
    }, [sort?.key, sort?.direction, friendsDeckData])

    const tableData = sortedData.map(item => (
      <Table.Row key={item.title}>
        <Table.Cell>{item.question}</Table.Cell>
        <Table.Cell>{item.answer}</Table.Cell>
        <Table.Cell>{item.updated}</Table.Cell>
        <Table.Cell>
          <Grade initialGrade={item.grade} />
        </Table.Cell>
      </Table.Row>
    ))

    return (
      <>
        <Table.Root>
          <TableHeader columns={columnsFriendsDeck} sort={sort} onSort={setSort} />
          <Table.Body>{tableData}</Table.Body>
        </Table.Root>
      </>
    )
  },
}

export const columnsMyDeck: Column[] = [
  {
    key: 'question',
    title: 'Question',
    sortable: true,
  },
  {
    key: 'answer',
    title: 'Answer',
    sortable: true,
  },
  {
    key: 'updated',
    title: 'Last Updated',
    sortable: true,
  },
  {
    key: 'grade',
    title: 'Grade',
    sortable: true,
  },
  {
    key: 'options',
    title: '',
    sortable: false,
  },
]
export const MyDeckTable = {
  render: () => {
    const [sort, setSort] = useState<Sort>(null)

    const sortedString = sort ? `${sort.key}-${sort.direction}` : null

    console.log(sortedString)

    const sortedData = useMemo(() => {
      if (sort?.key) {
        return [...friendsDeckData].sort((a, b) => {
          if (a[sort.key] < b[sort.key]) {
            return sort.direction === 'asc' ? -1 : 1
          }
          if (a[sort.key] > b[sort.key]) {
            return sort.direction === 'asc' ? 1 : -1
          }

          return 0
        })
      }

      return friendsDeckData
    }, [sort?.key, sort?.direction, friendsDeckData])

    const tableData = sortedData.map(item => (
      <Table.Row key={item.title}>
        <Table.Cell>{item.question}</Table.Cell>
        <Table.Cell>{item.answer}</Table.Cell>
        <Table.Cell>{item.updated}</Table.Cell>
        <Table.Cell>
          <Grade initialGrade={item.grade} />
        </Table.Cell>
        <Table.Cell>
          <TableActionButtons isLearn={false} editHandler={() => {}} deleteHandler={() => {}} />
        </Table.Cell>
      </Table.Row>
    ))

    return (
      <>
        <Table.Root>
          <TableHeader columns={columnsMyDeck} sort={sort} onSort={setSort} />
          <Table.Body>{tableData}</Table.Body>
        </Table.Root>
      </>
    )
  },
}
