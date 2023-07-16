import { FC } from 'react'

import { EditOutlined } from '../../../../images/svg/icons/editOutlined/editOutlined.tsx'
import { PlayCircle } from '../../../../images/svg/icons/playCircle'
import { TrashOutlined } from '../../../../images/svg/icons/trashOutlined'
import { More } from '../../../../images/svg/more'
import { Dropdown, DropDownItemWithIcon } from '../dropdown.tsx'

type ToolsDropDownPropsType = {
  learnHandler: () => void
  editHandler: () => void
  deleteHandler: () => void
}
export const ToolsDropDown: FC<ToolsDropDownPropsType> = ({
  learnHandler,
  editHandler,
  deleteHandler,
}) => {
  return (
    <Dropdown trigger={<More />} showUserBlock={false}>
      <DropDownItemWithIcon
        icon={<PlayCircle />}
        text={'Learn'}
        onClick={learnHandler}
        separator={true}
      />
      <DropDownItemWithIcon
        icon={<EditOutlined />}
        text={'Edit'}
        onClick={editHandler}
        separator={true}
      />
      <DropDownItemWithIcon icon={<TrashOutlined />} text={'Delete'} onClick={deleteHandler} />
    </Dropdown>
  )
}
