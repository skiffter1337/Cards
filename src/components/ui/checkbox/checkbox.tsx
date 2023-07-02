import { FC } from 'react'

import * as Checkbox from '@radix-ui/react-checkbox'

import { Check } from '../../../images/svg/icons/check'
import { Label } from '../label/label.tsx'

import s from './checkbox.module.scss'

type CheckBoxPropsType = {
  label?: string
  checked?: boolean
  required?: boolean
  disabled?: boolean
  onChange?: () => void
}
export const CheckboxItem: FC<CheckBoxPropsType> = ({
  label,
  checked,
  required,
  disabled,
  onChange,
}) => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <Checkbox.Root
          className={s.root}
          defaultChecked
          id="c1"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          required={required}
        >
          <Checkbox.Indicator className={s.indicator}>
            <Check
              color1={disabled ? 'var(--color-light-900)' : '#000'}
              color2={disabled ? 'var(--color-dark-100)' : '#fff'}
            />
          </Checkbox.Indicator>
        </Checkbox.Root>
      </div>
      <Label
        title={label ?? ''}
        htmlFor={'c1'}
        variant={'body2'}
        classname={`${s.label} ${disabled ? s.disabled : ''}`}
      />
    </div>
  )
}
