import { ChangeEvent, useState } from 'react'

import { Header } from './components/header'
import { CheckboxItem } from './components/ui/checkbox'
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
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '100px',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div>
          <Input
            value={value}
            label={'Input'}
            error={false}
            search={true}
            disabled={false}
            placeholder={'Input'}
            onChange={onChangeHandler}
            onClearClick={clearInputValue}
          />
        </div>
        <div style={{ margin: '100px' }}>
          <CheckboxItem label={'Check me'} disabled={false} />
        </div>
      </div>
    </div>
  )
}
