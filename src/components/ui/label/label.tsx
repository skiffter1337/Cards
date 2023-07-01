import { FC } from 'react'

import { Typography, TypographyType } from '../typography'

type LabelPropsType = {
  label: string | undefined
  classname?: string
  variant: TypographyType
  htmlFor?: string
}
export const Label: FC<LabelPropsType> = ({ label, htmlFor, variant, classname }) => {
  return (
    <label htmlFor={htmlFor}>
      <Typography variant={variant} className={classname}>
        {label}
      </Typography>
    </label>
  )
}
