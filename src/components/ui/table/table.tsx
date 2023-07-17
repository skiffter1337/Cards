import { ComponentProps, FC } from 'react'

import { Typography } from '../typography'

import s from './table.module.scss'

export type RootProps = ComponentProps<'table'>

export const Root: FC<RootProps> = ({ className, ...rest }) => {
  const classNames = `${className} ${s.table}`

  return <table className={classNames} {...rest} />
}

export type HeadProps = ComponentProps<'thead'>

export const Head: FC<HeadProps> = props => {
  return <thead {...props} />
}

export type BodyProps = ComponentProps<'tbody'>

export const Body: FC<BodyProps> = props => {
  return <tbody {...props} />
}

export type RowProps = ComponentProps<'tr'>

export const Row: FC<RowProps> = ({ className, ...rest }) => {
  const classNames = `${className} ${s.row}`

  return <tr {...rest} className={classNames} />
}

export type HeadCellProps = ComponentProps<'th'>

export const HeadCell: FC<HeadCellProps> = ({ className, ...rest }) => {
  const classNames = `${className} ${s.head_cell}`

  return <th className={classNames} {...rest} />
}

export type CellProps = ComponentProps<'td'>

export const Cell: FC<CellProps> = ({ className, children, ...rest }) => {
  const classNames = `${className} ${s.table_cell}`

  return (
    <td className={classNames} {...rest}>
      <Typography variant={'body2'} className={s.table_cell_text}>
        {children}
      </Typography>
    </td>
  )
}

export const Empty: FC<ComponentProps<'div'> & { mt?: string; mb?: string }> = ({
  className,
  mt = '89px',
  mb,
}) => {
  const classNames = `${className} ${s.empty}`

  return (
    <Typography variant={'h2'} className={classNames} style={{ marginTop: mt, marginBottom: mb }}>
      Пока тут еще нет данных! :(
    </Typography>
  )
}

export const Table = {
  Root,
  Head,
  Body,
  Row,
  HeadCell,
  Cell,
  Empty,
}
