import { ReactNode } from 'react'

import s from './typography.module.scss'

type PropsType = {
  variant: string
  children: ReactNode
}
export const Typography: React.FC<PropsType> = ({ variant, children }) => {
  const getClassName = () => {
    switch (variant) {
      case 'Large':
        return s.large
      case 'H1':
        return s.h1
      case 'H2':
        return s.h2
      case 'H3':
        return s.h3
      case 'Body1':
        return s.body1
      case 'Subtitle1':
        return s.subtitle1
      case 'Body2':
        return s.body2
      case 'Subtitle2':
        return s.subtitle2
      case 'Caption':
        return s.caption
      case 'Overline':
        return s.overline
      case 'Link1':
        return s.link1
      case 'Link2':
        return s.link2
    }
  }

  return <div className={getClassName()}>{children}</div>
}
