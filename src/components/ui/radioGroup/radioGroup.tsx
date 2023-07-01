import { FC } from 'react'

import * as RadioGroupRadix from '@radix-ui/react-radio-group'

import { Label } from '../label/label.tsx'

import s from './radioGroup.module.scss'

type RadioGroupPropsType = {
  label?: string
  disabled?: boolean
}
export const RadioGroup: FC<RadioGroupPropsType> = ({ label, disabled }) => {
  return (
    <RadioGroupRadix.Root
      className={s.radioGroup_root}
      defaultValue="default"
      aria-label="View density"
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div className={s.radioGroup_wrapper}>
          <RadioGroupRadix.Item className={s.radioGroup_item} value="default" id="r1">
            <RadioGroupRadix.Indicator className={s.radioGroup_indicator} />
          </RadioGroupRadix.Item>
        </div>
        <Label
          label={label}
          variant={'body2'}
          classname={`${s.label} ${disabled ? s.disabled : ''}`}
          htmlFor={'r1'}
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div className={s.radioGroup_wrapper}>
          <RadioGroupRadix.Item className={s.radioGroup_item} value="comfortable" id="r2">
            <RadioGroupRadix.Indicator className={s.radioGroup_indicator} />
          </RadioGroupRadix.Item>
        </div>
        <Label
          label={label}
          variant={'body2'}
          classname={`${s.label} ${disabled ? s.disabled : ''}`}
          htmlFor={'r2'}
        />
      </div>
    </RadioGroupRadix.Root>
  )
}
