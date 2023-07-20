import { FC, ReactNode } from 'react'

import s from './container.module.scss'
type ContainerPropsType = {
  children: ReactNode
}
export const Container: FC<ContainerPropsType> = ({ children }) => {
  return <div className={s.container}>{children}</div>
}
