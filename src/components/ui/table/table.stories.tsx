import { useState } from 'react'

import { Head, TableHeader } from './head/head.tsx'
import s from './table.module.scss'
import { Table } from './table.tsx'

export default {
  title: 'Tables/Table',
  component: Table,
  tags: ['autodocs'],
  argTypes: {},
}

const data = [
  {
    title: 'Project A',
    cardsCount: 10,
    updated: '2023-07-07',
    createdBy: 'John Doe',
  },
  {
    title: 'Project B',
    cardsCount: 5,
    updated: '2023-07-06',
    createdBy: 'Jane Smith',
  },
  {
    title: 'Project C',
    cardsCount: 8,
    updated: '2023-07-05',
    createdBy: 'Alice Johnson',
  },
  {
    title: 'Project D',
    cardsCount: 3,
    updated: '2023-07-07',
    createdBy: 'Bob Anderson',
  },
  {
    title: 'Project E',
    cardsCount: 12,
    updated: '2023-07-04',
    createdBy: 'Emma Davis',
  },
]

export const columns: Column[] = [
  {
    key: 'name',
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

    console.log(sort, sortedString)

    return (
      <Table.Root>
        <TableHeader columns={columns} sort={sort} onSort={setSort} />
        <Table.Body>
          {data.map(item => (
            <Table.Row key={item.title}>
              <Table.Cell>{item.title}</Table.Cell>
              <Table.Cell>{item.cardsCount}</Table.Cell>
              <Table.Cell>{item.updated}</Table.Cell>
              <Table.Cell>{item.createdBy}</Table.Cell>
              <Table.Cell>icons...</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    )
  },
}
