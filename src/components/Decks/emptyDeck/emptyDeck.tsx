import { Button } from '../../ui/button'
import { AddNewCardModal } from '../../ui/modal/addNewCardModal'
import { Typography } from '../../ui/typography'
import { BackButton } from '../myDeck/backButton/backButton.tsx'

import s from './emptyDeck.module.scss'

export const EmptyDeck = () => {
  return (
    <div className={s.empty_deck}>
      <div className={s.container}>
        <BackButton className={s.back} />
        <Typography variant={'large'} className={s.title}>
          Decks list
        </Typography>
        <div className={s.add_new_card_block}>
          <Typography variant={'body1'} className={s.caption}>
            This deck is empty. Click add new card to fill this deck
          </Typography>
          <AddNewCardModal
            width={'wide'}
            trigger={
              <Button variant={'primary'} onClick={() => {}}>
                <Typography variant={'body1'} className={s.add_new_card_button_text}>
                  Add New Card
                </Typography>
              </Button>
            }
          />
        </div>
      </div>
    </div>
  )
}
