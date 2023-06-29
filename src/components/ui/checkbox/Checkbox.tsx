import { FC } from 'react'

import * as Checkbox from '@radix-ui/react-checkbox'

import { Check } from '../../../images/svg/icons/check'
import { Typography } from '../typography'

import s from './checkbox.module.scss'

type CheckBoxPropstype = {
  label?: string
  checked?: boolean
  required?: boolean
  disabled?: boolean
  onChange?: () => void
}
export const CheckboxItem: FC<CheckBoxPropstype> = ({
  label,
  checked,
  required,
  disabled,
  onChange,
}) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }} className={s.checkbox_container}>
      <div className={s.checkbox_wrapper}>
        <Checkbox.Root
          className={s.checkbox_root}
          defaultChecked
          id="c1"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          required={required}
        >
          <Checkbox.Indicator className={s.checkbox_indicator}>
            <Check
              color1={disabled ? 'var(--color-light-900)' : '#000'}
              color2={disabled ? 'var(--color-dark-100)' : '#fff'}
            />
          </Checkbox.Indicator>
        </Checkbox.Root>
      </div>
      <label htmlFor="c1">
        <Typography variant={'body2'} className={`${s.label} ${disabled ? s.disabled : ''}`}>
          {label}
        </Typography>
      </label>
    </div>
  )
}
