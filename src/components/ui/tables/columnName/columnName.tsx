import { FC } from 'react'

import { ArrowDown } from '../../../../images/svg/icons/arrowDown'
import { ArrowUp } from '../../../../images/svg/icons/arrowUp'
import { Typography } from '../../typography'

import s from './columnName.module.scss'

type ColumnNameProps = {
  title: string
  withIcon?: boolean
  currentSort?: 'sortUp' | 'sortDown'
  callback: () => void
}
export const ColumnName: FC<ColumnNameProps> = ({ title, withIcon, callback, currentSort }) => {
  return (
    <th
      className={`${s.container} ${withIcon ? s.withIcon : ''}`}
      onClick={withIcon ? callback : undefined}
    >
      <Typography variant={'subtitle2'} className={s.title}>
        {title}
      </Typography>
      {withIcon &&
        (currentSort === 'sortUp' ? <ArrowUp /> : <ArrowDown color={'var(--color-light-100'} />)}
    </th>
  )
}
