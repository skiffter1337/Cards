import { FC } from 'react'

import * as Checkbox from '@radix-ui/react-checkbox'

import { Check } from '../../../images/svg/icons/check'
import { CheckSmall } from '../../../images/svg/icons/check/checkSmall.tsx'
import { Typography } from '../typography'

import s from './checkbox.module.scss'

export type CheckBoxPropsType = {
  label?: string
  checked?: boolean
  required?: boolean
  disabled?: boolean
  onChange: (checked: boolean) => void
  className?: string
  size: 'small' | 'default'
}
export const CheckboxItem: FC<CheckBoxPropsType> = ({
  label,
  checked,
  required,
  disabled,
  onChange,
  className,
  size,
}) => {
  const color1 = disabled ? 'var(--color-light-900)' : '#000'
  const color2 = disabled ? 'var(--color-dark-100)' : '#fff'

  return (
    <div className={` ${s.container} ${className} `}>
      <div className={s.wrapper}>
        <Checkbox.Root
          className={`${s.root} ${size === 'small' && s.small}`}
          defaultChecked
          id="c1"
          checked={checked}
          onCheckedChange={onChange}
          disabled={disabled}
          required={required}
        >
          {/*To do: small checkbox*/}
          <Checkbox.Indicator className={s.indicator}>
            {size === 'default' ? (
              <Check color1={color1} color2={color2} />
            ) : (
              <CheckSmall color1={color1} color2={color2} />
            )}
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
