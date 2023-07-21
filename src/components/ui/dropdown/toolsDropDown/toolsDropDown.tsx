import { FC } from 'react'

import { EditOutlined } from '../../../../images/svg/icons/editOutlined/editOutlined.tsx'
import { PlayCircle } from '../../../../images/svg/icons/playCircle'
import { TrashOutlined } from '../../../../images/svg/icons/trashOutlined'
import { More } from '../../../../images/svg/more'
import { DeleteDeckModal } from '../../modal/deleteDeckModal'
import { EditDeckModal } from '../../modal/editDeckModal'

import { Dropdown, DropDownItemWithIcon } from './../dropdown.tsx'

type ToolsDropDownPropsType = {
  learnHandler?: () => void
  editHandler?: () => void
  deleteHandler?: () => void
}

// FIXME DROPDOWN ITEM SEPARATOR POPIERDOLILO
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
        onSelect={learnHandler}
        separator={true}
      />
      <EditDeckModal
        width={'wide'}
        trigger={
          <div>
            <DropDownItemWithIcon
              icon={<EditOutlined />}
              text={'Edit'}
              onSelect={editHandler}
              separator={true}
            />
          </div>
        }
      />

      <DeleteDeckModal
        width={'wide'}
        trigger={
          <div>
            <DropDownItemWithIcon
              icon={<TrashOutlined />}
              text={'Delete'}
              onSelect={deleteHandler}
            />
          </div>
        }
      />
    </Dropdown>
  )
}
