import { useState } from 'react'

import { Table } from './table.tsx'

export default {
  title: 'Components/Table',
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

type Sort = {
  key: string
  direction: 'asc' | 'desc'
} | null

export const WithSort = {
  render: () => {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cards</th>
            <th>Last Updated</th>
            <th>Created by</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.title}>
              <td>{item.title}</td>
              <td>{item.cardsCount}</td>
              <td>{item.updated}</td>
              <td>{item.createdBy}</td>
              <td>icons...</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  },
}
