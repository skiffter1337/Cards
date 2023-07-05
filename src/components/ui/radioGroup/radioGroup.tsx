import { FC } from 'react'

import * as RadioGroupRadix from '@radix-ui/react-radio-group'

import { Typography } from '../typography'

import s from './radioGroup.module.scss'

type RadioGroupType = {
  id: string
  value: string
  title: string
  disabled: boolean
  required: boolean
}

type RadioGroupPropsType = {
  radioGroup: RadioGroupType[]
  ariaLabel: string
  defaultValue: string
  callback: () => void
}
export const RadioGroup: FC<RadioGroupPropsType> = ({
  radioGroup,
  ariaLabel,
  defaultValue,
  callback,
}) => {
  return (
    <RadioGroupRadix.Root
      className={s.root}
      defaultValue={defaultValue}
      aria-label={ariaLabel}
      onValueChange={callback}
    >
      {radioGroup.map(radio => {
        return (
          <div className={s.container} key={radio.id}>
            <div className={`${s.wrapper} ${radio.disabled ? s.disabled : ''}`}>
              <RadioGroupRadix.Item
                className={s.item}
                value={radio.value}
                id={radio.id}
                disabled={radio.disabled}
              >
                <RadioGroupRadix.Indicator className={s.indicator} />
              </RadioGroupRadix.Item>
            </div>
            <Typography
              as={'label'}
              variant={'body2'}
              className={`${s.label} ${radio.disabled ? s.disabled : ''}`}
              htmlFor={radio.id}
            >
              {radio.title}
            </Typography>
          </div>
        )
      })}
    </RadioGroupRadix.Root>
  )
}
