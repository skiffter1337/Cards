import { ChangeEvent, useState } from 'react'

import { Header } from './components/header'
import { Input } from './components/ui/input'

export function App() {
  // input test logic
  const [value, setValue] = useState('')

  const onChangeHandler = (text: ChangeEvent<HTMLInputElement>) => {
    setValue(text.currentTarget.value)
  }
  const clearInputValue = () => {
    setValue('')
  }

  // input test logic
  return (
    <div style={{ background: 'black' }}>
      <Header />
      <div style={{ margin: '200px' }}>
        <Input
          value={value}
          label={'Input'}
          search={true}
          disabled={false}
          placeholder={'Input'}
          onChange={onChangeHandler}
          onClearClick={clearInputValue}
        />
      </div>
    </div>
  )
}
