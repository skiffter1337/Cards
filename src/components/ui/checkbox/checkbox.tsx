import { FC } from 'react'

import * as Checkbox from '@radix-ui/react-checkbox'

import { Check } from '../../../images/svg/icons/check'
import { Typography } from '../typography'

import s from './checkbox.module.scss'

export type CheckBoxPropsType = {
  label?: string
  checked?: boolean
  required?: boolean
  disabled?: boolean
  onChange: (checked: boolean) => void
  className?: string
}
export const CheckboxItem: FC<CheckBoxPropsType> = ({
  label,
  checked,
  required,
  disabled,
  onChange,
  className,
}) => {
  return (
    <div className={` ${s.container} ${className} `}>
      <div className={s.wrapper}>
        <Checkbox.Root
          className={s.root}
          defaultChecked
          id="c1"
          checked={checked}
          onCheckedChange={onChange}
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
      <Typography
        as={'label'}
        title={label ?? ''}
        htmlFor={'c1'}
        variant={'body2'}
        className={`${s.label} ${disabled ? s.disabled : ''} ${className ? s[className] : ''}`}
      >
        {label ?? ''}
      </Typography>
    </div>
  )
}
