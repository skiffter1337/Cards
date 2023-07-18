import { Column } from '../components/ui/table/table.stories.tsx'

type DataWithSortType = {
  title: string
  cardsCount: number
  updated: string
  createdBy: string
  [key: string]: string | number
}

export const dataWithSort: DataWithSortType[] = [
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

type FriendsDeckType = {
  question: string
  answer: string
  updated: string
  grade: 1 | 2 | 3 | 4 | 5
  [key: string]: string | number
}

export const friendsDeckData: FriendsDeckType[] = [
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
