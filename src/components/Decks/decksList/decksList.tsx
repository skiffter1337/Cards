import { useMemo, useState } from 'react'

import { columnsWithSort, dataWithSort } from '../../../data/table-data-test.ts'
import { TrashOutlined } from '../../../images/svg/icons/trashOutlined'
import { Button } from '../../ui/button'
import { Input } from '../../ui/input'
import { Slider } from '../../ui/slider'
import { Table } from '../../ui/table'
import { Sort } from '../../ui/table/table.stories.tsx'
import { TableActionButtons } from '../../ui/table/tableActionButtons'
import { TableHeader } from '../../ui/table/tableHeader'
import { TabSwitcher } from '../../ui/tabSwitcher'
import { Typography } from '../../ui/typography'

import s from './decksList.module.scss'

export const DecksList = () => {
  // slider test logic

  const [sliderValues, setSliderValues] = useState<[number, number]>([1, 100])

  const changeSliderValues = (values: [number, number]) => setSliderValues(values)
  const showSliderValues = (values: [number, number]) => {
    console.log(`Slider values are: ${values}`)
  }
  // slider test logic

  // table sort logic
  const [sort, setSort] = useState<Sort>(null)
  const sortedString = sort ? `${sort.key}-${sort.direction}` : null

  console.log(sortedString)
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

  // table sort logic

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
    <div className={s.decks_list}>
      <div className={s.container}>
        <div className={s.header}>
          <Typography variant={'large'} className={s.title}>
            Decks list
          </Typography>
          <Button variant={'primary'} onClick={() => {}}>
            <Typography variant={'subtitle2'} className={s.button_text}>
              Add New Deck
            </Typography>
          </Button>
        </div>
        <div className={s.filter_panel}>
          <div className={s.input}>
            <Input id={'search'} search={true} placeholder={'Input Search'} />
          </div>
          <div className={s.tabs}>
            <TabSwitcher
              label={'Show decks'}
              tabs={[
                { value: 'myDeck', title: 'My Decks', disabled: false },
                { value: 'allDecks', title: 'All Decks', disabled: false },
              ]}
              ariaLabel={'My decks to all decks switcher'}
              defaultValue={'allDecks'}
              callback={() => {}}
            />
          </div>
          <div className={s.slider}>
            <Slider
              min={1}
              max={100}
              step={1}
              sliderValues={sliderValues}
              onValueCommit={showSliderValues}
              changeSliderValues={changeSliderValues}
              label={'Number of cards'}
            />
          </div>
          <Button variant={'secondary'}>
            <TrashOutlined />{' '}
            <Typography variant={'subtitle2'} className={s.button_text}>
              Clear Filter
            </Typography>
          </Button>
        </div>
        <div className={s.table}>
          <Table.Root>
            <TableHeader columns={columnsWithSort} sort={sort} onSort={setSort} />
            <Table.Body>{tableData}</Table.Body>
          </Table.Root>
        </div>
      </div>
    </div>
  )
}
