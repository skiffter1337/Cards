import { ChangeEvent, useState } from 'react'

import { Header } from './components/header'
import { CheckboxItem } from './components/ui/checkbox'
import { Input } from './components/ui/input'
import { RadioGroup } from './components/ui/radioGroup/radioGroup.tsx'
import { Select } from './components/ui/select'
import { Slider } from './components/ui/slider'
import { Table } from './components/ui/table/table.tsx'
import { TableHeadRow } from './components/ui/tables/tableHeadRow'
import { TabSwitcher } from './components/ui/tabSwitcher'
import data from './data/mock-data.json'
import AvatarImg from './images/png/Ellipse 54.png'
export function App() {
  // useState and onClickHandler are temporary logic to test UI
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

  const changeIsLoggedIn = () => {
    setIsLoggedIn(!isLoggedIn)
  }
  // useState and onClickHandler are temporary logic to test UI //

  // input test logic
  const [value, setValue] = useState('')

  const onChangeHandler = (text: ChangeEvent<HTMLInputElement>) => {
    setValue(text.currentTarget.value)
  }
  const clearInputValue = () => {
    setValue('')
  }

  // input test logic

  // slider test logic

  const [sliderValues, setSliderValues] = useState<[number, number]>([18, 100])

  const changeSliderValues = (values: [number, number]) => setSliderValues(values)

  const showSliderValues = (values: [number, number]) => {
    console.log(`Slider values are: ${values}`)
  }
  // slider test logic

  // tabs test logic
  const onTabsValueChange = () => {
    console.log('tabs changed')
  }

  // tabs test logic

  // radio test logic
  const onRadioValuesChange = () => {
    console.log('radio changed')
  }

  // radio test logic

  //checkbox logic test
  const [checked, setChecked] = useState(false)

  const onCheckedChange = (checked: boolean) => setChecked(checked)

  console.log(checked)

  //checkbox logic test

  // select test logic
  const onSelectChange = () => {
    console.log('select changed')
  }

  // select test logic

  // TableHeadRow test logic

  const [currentSort, setCurrentSort] = useState<'sortUp' | 'sortDown'>('sortUp')
  const onClickSortHandler = () => {
    currentSort === 'sortUp' ? setCurrentSort('sortDown') : setCurrentSort('sortUp')
  }

  // TableHeadRow test logic
  return (
    <div style={{ background: 'black' }}>
      <Header
        isLoggedIn={isLoggedIn}
        changeIsLoggedIn={changeIsLoggedIn}
        email={'example@gmail.com'}
        userName={'Ivan'}
        avatar={AvatarImg}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '100px',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Input
          type={'password'}
          //search={true}
          value={value}
          label={'Input'}
          error={false}
          disabled={false}
          placeholder={'Input'}
          onChange={onChangeHandler}
          onClearClick={clearInputValue}
          id={'test'}
        />

        <div
          style={{
            margin: '100px',
            width: '100%',
            height: '120px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Slider
            min={18}
            max={100}
            step={1}
            sliderValues={sliderValues}
            onValueCommit={showSliderValues}
            changeSliderValues={changeSliderValues}
          />
        </div>
        <div>
          <CheckboxItem onChange={onCheckedChange} checked={checked} label={'Check me'} />
        </div>
        <div
          style={{
            padding: '300px',
            // background: 'gray',
          }}
        >
          <TabSwitcher
            label={'Title'}
            tabs={[
              { value: 'tab1', title: 'Switcher' },
              { value: 'tab2', title: 'Switcher' },
              { value: 'tab3', title: 'Switcher' },
            ]}
            ariaLabel={'Tabs'}
            defaultValue={'tab2'}
            callback={onTabsValueChange}
          />
        </div>
        <div
          style={{
            padding: '300px',
            // background: 'gray',
          }}
        >
          <RadioGroup
            radioGroup={[
              { id: 'r1', value: 'option1', title: 'Option1', disabled: true, required: false },
              { id: 'r2', value: 'option2', title: 'Option2', disabled: false, required: false },
              { id: 'r3', value: 'option3', title: 'Option3', disabled: false, required: false },
            ]}
            ariaLabel={'Radio Group'}
            defaultValue={'option2'}
            callback={onRadioValuesChange}
          />
        </div>
        <Select
          placeholder={'Select-box'}
          ariaLabel={'Food selector'}
          label={'Select'}
          selectItems={[
            { id: '1', value: 'apple', title: 'Apple', disabled: true },
            { id: '2', value: 'banana', title: 'Banana', disabled: false },
            { id: '3', value: 'blueberry', title: 'Blueberry', disabled: false },
            { id: '4', value: 'grapes', title: 'Grapes', disabled: true },
            { id: '5', value: 'pineapple', title: 'Pineapple', disabled: false },
          ]}
          disabled={false}
          callback={onSelectChange}
          size={'large'}
        />
        <div
          style={{
            padding: '300px',
            // background: 'gray',
          }}
        ></div>
        <div
          style={{
            background: 'purple',
            padding: '100px',
          }}
        >
          <Table data={data} />
        </div>
      </div>
      <TableHeadRow
        title={'Name'}
        withIcon={true}
        callback={onClickSortHandler}
        currentSort={currentSort}
      />
    </div>
  )
}
