import { CheckEmailIcon } from '../../../images/svg/checkEmail'
import { Button } from '../../ui/button'
import { Card } from '../../ui/card'
import { Typography } from '../../ui/typography'

import s from './checkEmail.module.scss'
export const CheckEmail = () => {
  return (
    <Card className={s.card}>
      <Typography variant={'large'} className={s.title}>
        Check Email
      </Typography>
      <div className={s.email_image}>
        <CheckEmailIcon />
      </div>
      <Typography variant={'body2'} className={s.hint}>
        We’ve sent an Email with instructions to example@mail.com
      </Typography>
      <Button fullWidth={true} className={s.button}>
        <Typography variant={'subtitle2'} className={s.button_text}>
          Back to Sign In
        </Typography>
      </Button>
    </Card>
  )
}
