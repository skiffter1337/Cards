import { FC } from 'react'

import { ArrowDown } from '../../../../images/svg/icons/arrowDown'
import { ArrowUp } from '../../../../images/svg/icons/arrowUp'
import { Typography } from '../../typography'

import s from './tableHeadRow.module.scss'

type TableHeadRowProps = {
  title: string
  withIcon?: boolean
  callback: () => void
  currentSort: 'sortUp' | 'sortDown'
}
export const TableHeadRow: FC<TableHeadRowProps> = ({ title, withIcon, callback, currentSort }) => {
  return (
    <div
      className={`${s.container} ${withIcon ? s.withIcon : ''}`}
      onClick={withIcon ? callback : undefined}
    >
      <Typography variant={'subtitle2'} className={s.title}>
        {title}
      </Typography>
      {withIcon && currentSort === 'sortUp' ? (
        <ArrowUp />
      ) : (
        <ArrowDown color={'var(--color-light-100'} />
      )}
    </div>
  )
}
