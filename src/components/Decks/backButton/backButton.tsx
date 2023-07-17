import { FC } from 'react'

import { ArrowBack } from '../../../images/svg/icons/arrowBack'
import { Button } from '../../ui/button'
import { Typography } from '../../ui/typography'

import s from './backButton.module.scss'

type BackButtonPropsType = {
  className?: string
}
export const BackButton: FC<BackButtonPropsType> = ({ className }) => {
  return (
    <Button variant={'link'} as={'a'} className={`${s.back_button} ${className}`}>
      <Typography variant={'body2'} className={s.back_button_text}>
        <ArrowBack /> Back to Decks List
      </Typography>
    </Button>
  )
}
