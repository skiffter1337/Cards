import { useMemo, useState } from 'react'

import { columnsMyDeck, friendsDeckData } from '../../../data/table-data-test.ts'
import { Button } from '../../ui/button'
import { ToolsDropDown } from '../../ui/dropdown/toolsDropDown'
import { Grade } from '../../ui/grade'
import { Input } from '../../ui/input'
import { AddNewCardModal } from '../../ui/modal/addNewCardModal'
import { DeleteDeckModal } from '../../ui/modal/deleteDeckModal'
import { Table } from '../../ui/table'
import { Sort } from '../../ui/table/table.stories.tsx'
import { TableActionButtons } from '../../ui/table/tableActionButtons'
import { TableHeader } from '../../ui/table/tableHeader'
import { Typography } from '../../ui/typography'

import { BackButton } from './backButton/backButton.tsx'
import s from './myDeck.module.scss'

export const MyDeck = () => {
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
      <Table.Cell>
        <TableActionButtons isLearn={false} editHandler={() => {}} deleteHandler={() => {}} />
      </Table.Cell>
    </Table.Row>
  ))

  return (
    <div className={s.my_deck}>
      <div className={s.container}>
        <BackButton to={'/'} className={s.back} />
        <div className={s.header}>
          <div className={s.control_block}>
            <Typography variant={'large'} className={s.title}>
              My Deck
            </Typography>
            <ToolsDropDown />
          </div>
          <AddNewCardModal
            width={'wide'}
            trigger={
              <Button variant={'primary'}>
                <Typography variant={'subtitle2'} className={s.button_text}>
                  Add New Card
                </Typography>
              </Button>
            }
          />
        </div>
        <Input placeholder={'Input search'} search={true} className={s.input} />
        <div className={s.table}>
          <Table.Root>
            <TableHeader columns={columnsMyDeck} sort={sort} onSort={setSort} />
            <Table.Body>{tableData}</Table.Body>
          </Table.Root>
        </div>
      </div>
    </div>
  )
}
