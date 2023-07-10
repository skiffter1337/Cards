import { FC } from 'react'

import { EditOutlined } from '../../../../images/svg/icons/editOutlined/editOutlined.tsx'
import { PlayCircle } from '../../../../images/svg/icons/playCircle'
import { TrashOutlined } from '../../../../images/svg/icons/trashOutlined'
import { CheckboxItem } from '../../checkbox'
import { Typography } from '../../typography'

import s from './columnContent.module.scss'

type ColumnContentPropsType = {
  title?: string
  check?: boolean
  leftIcons?: boolean
  play?: boolean
  image?: string
}
export const ColumnContent: FC<ColumnContentPropsType> = ({
  title,
  check,
  leftIcons,
  play,
  image,
}) => {
  return (
    <div className={s.container}>
      <div className={s.block}>
        {check && <CheckboxItem onChange={() => {}} className={s.checkbox} size={'small'} />}
        {image && <img src={image} />}
        {play ? (
          <PlayCircle />
        ) : (
          <Typography variant={'body2'} className={s.row_text}>
            {title}
          </Typography>
        )}
        {leftIcons && (
          <>
            <EditOutlined />
            <TrashOutlined />
          </>
        )}
      </div>
    </div>
  )
}
