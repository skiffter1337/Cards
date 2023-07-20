import { useMemo, useState } from 'react'

import { columnsFriendsDeck, friendsDeckData } from '../../../data/table-data-test.ts'
import { Button } from '../../ui/button'
import { Grade } from '../../ui/grade'
import { Input } from '../../ui/input'
import { Table } from '../../ui/table'
import { Sort } from '../../ui/table/table.stories.tsx'
import { TableHeader } from '../../ui/table/tableHeader'
import { Typography } from '../../ui/typography'
import { BackButton } from '../myDeck/backButton/backButton.tsx'

import s from './friendDecks.module.scss'

export const FriendDecks = () => {
  // table sort logic
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

  // table sort logic

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
    <div className={s.friend_decks}>
      <div className={s.container}>
        <BackButton className={s.back} />
        <div className={s.header}>
          <Typography variant={'large'} className={s.title}>
            Friend’s Decks
          </Typography>
          <Button variant={'primary'}>
            <Typography variant={'subtitle2'} className={s.button_text}>
              Learn to Pack
            </Typography>
          </Button>
        </div>
        <Input placeholder={'Input search'} search={true} className={s.input} />
        <div className={s.table}>
          <Table.Root>
            <TableHeader columns={columnsFriendsDeck} sort={sort} onSort={setSort} />
            <Table.Body>{tableData}</Table.Body>
          </Table.Root>
        </div>
      </div>
    </div>
  )
}
