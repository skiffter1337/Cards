import { useMemo, useState } from 'react'

import { EditOutlined } from '../../../images/svg/icons/editOutlined/editOutlined.tsx'
import { PlayCircle } from '../../../images/svg/icons/playCircle'
import { TrashOutlined } from '../../../images/svg/icons/trashOutlined'
import { Header } from '../../header'
import { Grade } from '../tables/grade'
import { Typography } from '../typography'

import AvatarImg from './../../../images/png/Ellipse 54.png'
import { TableHeader } from './head/head.tsx'
import s from './table.module.scss'
import { Table } from './table.tsx'

export default {
  title: 'Tables/Table',
  component: Table,
  tags: ['autodocs'],
  argTypes: {},
}

type DataWithSortType = {
  title: string
  cardsCount: number
  updated: string
  createdBy: string
  [key: string]: string | number
}

const dataWithSort: DataWithSortType[] = [
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

    return (
      <Table.Root className={s.root}>
        <TableHeader columns={columnsWithSort} sort={sort} onSort={setSort} />
        <Table.Body>
          {sortedData.map(item => (
            <Table.Row key={item.title} className={s.row}>
              <Table.Cell className={s.table_cell}>
                <Typography variant={'body2'} className={s.table_cell_text}>
                  {item.title}
                </Typography>
              </Table.Cell>
              <Table.Cell className={s.table_cell}>
                <Typography variant={'body2'} className={s.table_cell_text}>
                  {item.cardsCount}
                </Typography>
              </Table.Cell>
              <Table.Cell className={s.table_cell}>
                <Typography variant={'body2'} className={s.table_cell_text}>
                  {item.updated}
                </Typography>
              </Table.Cell>
              <Table.Cell className={s.table_cell}>
                <Typography variant={'body2'} className={s.table_cell_text}>
                  {item.createdBy}
                </Typography>
              </Table.Cell>
              <Table.Cell className={`${s.table_cell}`}>
                <div className={s.icons}>
                  <PlayCircle />
                  <EditOutlined />
                  <TrashOutlined />
                </div>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    )
  },
}

type FriendsPackType = {
  question: string
  answer: string
  updated: string
  grade: 1 | 2 | 3 | 4 | 5
  [key: string]: string | number
}

const friendsPackData: FriendsPackType[] = [
  {
    question: 'How "This" works in JavaScript? 1',
    answer: 'This is how "This" works in JavaScript',
    updated: '2023-07-07',
    grade: 4,
  },
  {
    question: 'How "This" works in JavaScript? 2',
    answer: 'This is how "This" works in JavaScript 1',
    updated: '2023-07-06',
    grade: 3,
  },
  {
    question: 'How "This" works in JavaScript? 3',
    answer: 'This is how "This" works in JavaScript 2',
    updated: '2023-07-05',
    grade: 5,
  },
  {
    question: 'How "This" works in JavaScript? 4',
    answer: 'This is how "This" works in JavaScript 3',
    updated: '2023-07-07',
    grade: 1,
  },
  {
    question: 'How "This" works in JavaScript? 5',
    answer: 'This is how "This" works in JavaScript 4',
    updated: '2023-07-04',
    grade: 2,
  },
]

export const columnsFriendsPack: Column[] = [
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
export const FriendsPackTable = {
  render: () => {
    const [sort, setSort] = useState<Sort>(null)

    const sortedString = sort ? `${sort.key}-${sort.direction}` : null

    console.log(sortedString)

    const sortedData = useMemo(() => {
      if (sort?.key) {
        return [...friendsPackData].sort((a, b) => {
          if (a[sort.key] < b[sort.key]) {
            return sort.direction === 'asc' ? -1 : 1
          }
          if (a[sort.key] > b[sort.key]) {
            return sort.direction === 'asc' ? 1 : -1
          }

          return 0
        })
      }

      return friendsPackData
    }, [sort?.key, sort?.direction, friendsPackData])

    return (
      <>
        <Header
          isLoggedIn={true}
          changeIsLoggedIn={() => {}}
          userName={'Ivan'}
          email={'example@mail.ru'}
          avatar={AvatarImg}
        />
        <Table.Root className={s.root}>
          <TableHeader columns={columnsFriendsPack} sort={sort} onSort={setSort} />
          <Table.Body>
            {sortedData.map((item, index) => (
              <Table.Row key={`${index}-${item.answer}`} className={s.row}>
                <Table.Cell className={s.table_cell}>
                  <Typography variant={'body2'} className={s.table_cell_text}>
                    {item.question}
                  </Typography>
                </Table.Cell>
                <Table.Cell className={s.table_cell}>
                  <Typography variant={'body2'} className={s.table_cell_text}>
                    {item.answer}
                  </Typography>
                </Table.Cell>
                <Table.Cell className={s.table_cell}>
                  <Typography variant={'body2'} className={s.table_cell_text}>
                    {item.updated}
                  </Typography>
                </Table.Cell>
                <Table.Cell className={s.table_cell}>
                  <Grade initialGrade={item.grade} />
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </>
    )
  },
}
