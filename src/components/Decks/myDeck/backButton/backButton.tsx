import { FC } from 'react'

import { NavLink } from 'react-router-dom'

import { ArrowBack } from '../../../../images/svg/icons/arrowBack'
import { Button } from '../../../ui/button'
import { Typography } from '../../../ui/typography'

import s from './backButton.module.scss'

type BackButtonPropsType = {
  className?: string
  to: string
}
export const BackButton: FC<BackButtonPropsType> = ({ className, to }) => {
  return (
    <Button variant={'link'} as={NavLink} to={to} className={`${s.back_button} ${className}`}>
      <Typography variant={'body2'} className={s.back_button_text}>
        <ArrowBack /> Back to Decks List
      </Typography>
    </Button>
  )
}
