import { FC } from 'react'

import { EditOutlined } from '../../../../images/svg/icons/editOutlined/editOutlined.tsx'
import { PlayCircle } from '../../../../images/svg/icons/playCircle'
import { TrashOutlined } from '../../../../images/svg/icons/trashOutlined'
import { DeleteCardModal } from '../../modal/deleteCardModal'
import { EditCardModal } from '../../modal/editCardModal'

import s from './tableActionButtons.module.scss'

type TableActionButtonsPropsType = {
  isLearn?: boolean
  learnHandler?: () => void
  editHandler: () => void
  deleteHandler: () => void
}
export const TableActionButtons: FC<TableActionButtonsPropsType> = ({
  isLearn = true,
  learnHandler,
  editHandler,
  deleteHandler,
}) => {
  return (
    <div className={s.icons}>
      {isLearn && <PlayCircle onClick={learnHandler} />}
      <EditCardModal width={'wide'} trigger={<EditOutlined onClick={editHandler} />} />
      <DeleteCardModal width={'wide'} trigger={<TrashOutlined onClick={deleteHandler} />} />
    </div>
  )
}
