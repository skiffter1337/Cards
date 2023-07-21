import { NavLink } from 'react-router-dom'

import { Button } from '../../components/ui/button'
import { Typography } from '../../components/ui/typography'
import { Error404Image } from '../../images/svg/error404'

import s from './error404.module.scss'
export const Error404 = () => {
  return (
    <div className={s.container}>
      <Error404Image className={s.image} />
      <Typography variant={'body1'} className={s.text}>
        Sorry! Page not found!
      </Typography>
      <Button variant={'primary'} as={NavLink} to={'/'}>
        <Typography variant={'subtitle2'} className={s.button_text}>
          Back to home page
        </Typography>
      </Button>
    </div>
  )
}
