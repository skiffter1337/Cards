import { useState } from 'react'

import { DecksList } from './components/Decks/DecksList/decksList.tsx'
import { EmptyDeck } from './components/Decks/emptyDeck'
import { FriendDecks } from './components/Decks/friendDecks'
import { MyDecks } from './components/Decks/myDecks'
import { Header } from './components/header'
import AvatarImg from './images/png/avatarSmall.png'

export function App() {
  // useState and onClickHandler are temporary logic to test UI
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

  const changeIsLoggedIn = () => {
    setIsLoggedIn(!isLoggedIn)
  }
  // useState and onClickHandler are temporary logic to test UI //

  // TableHeadRow test logic
  return (
    <div style={{ background: 'black' }}>
      <Header
        isLoggedIn={isLoggedIn}
        changeIsLoggedIn={changeIsLoggedIn}
        email={'example@gmail.com'}
        userName={'Ivan'}
        avatar={AvatarImg}
      />
      <EmptyDeck />
      <DecksList />
      <FriendDecks />
      <MyDecks />
    </div>
  )
}
