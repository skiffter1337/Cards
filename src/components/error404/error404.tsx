import { Error404Image } from '../../images/svg/error404'
import { Button } from '../ui/button'
import { Typography } from '../ui/typography'

import s from './error404.module.scss'
export const Error404 = () => {
  return (
    <div className={s.container}>
      <Error404Image className={s.image} />
      <Typography variant={'body1'} className={s.text}>
        Sorry! Page not found!
      </Typography>
      <Button variant={'primary'} as={'a'}>
        <Typography variant={'subtitle2'} className={s.button_text}>
          Back to home page
        </Typography>
      </Button>
    </div>
  )
}
