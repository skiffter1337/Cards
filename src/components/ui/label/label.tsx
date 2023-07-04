import { FC } from 'react'

import { Typography, TypographyType } from '../typography'

type LabelPropsType = {
  title: string
  classname?: string
  variant: TypographyType
  htmlFor?: string
}
export const Label: FC<LabelPropsType> = ({ title, variant, classname, htmlFor }) => {
  return (
    <Typography
      as={'label'}
      variant={variant}
      className={classname}
      htmlFor={htmlFor}
      title={title}
    >
      {title}
    </Typography>
  )
}
