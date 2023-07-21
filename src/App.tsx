import { useState } from 'react'

import { Route, Routes } from 'react-router-dom'

import { CheckEmail } from './components/auth/checkEmail'
import { CreateNewPassword } from './components/auth/createNewPassword'
import { EditProfile } from './components/auth/editProfile'
import { ForgotPasswordForm } from './components/auth/forgotPassword'
import { LoginForm } from './components/auth/loginForm'
import { SignUpForm } from './components/auth/signUpForm'
import { DecksList } from './components/Decks/decksList/decksList.tsx'
import { EmptyDeck } from './components/Decks/emptyDeck'
import { FriendDecks } from './components/Decks/friendDecks'
import { MyDeck } from './components/Decks/myDeck'
import { Header } from './components/header'
import { Button } from './components/ui/button'
import { Container } from './components/ui/container/container.tsx'
import { AddNewCardModal } from './components/ui/modal/addNewCardModal'
import AvatarImg from './images/png/avatarSmall.png'
import { Error404 } from './pages/error404/error404.tsx'

export function App() {
  // useState and onClickHandler are temporary logic to test UI
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true)

  const changeIsLoggedIn = () => {
    setIsLoggedIn(!isLoggedIn)
    console.log(isLoggedIn)
  }
  // useState and onClickHandler are temporary logic to test UI //

  // test EditProfile
  const [name, setName] = useState('Ivan')
  const changeName = (newName: string) => {
    setName(newName)
  }

  const [avatar, setAvatar] = useState(AvatarImg)

  const changeAvatar = (newAvatar: string) => {
    setAvatar(newAvatar)
  }

  // test
  return (
    <div style={{ background: 'black' }}>
      <Header
        isLoggedIn={isLoggedIn}
        changeIsLoggedIn={changeIsLoggedIn}
        email={'example@gmail.com'}
        userName={'Ivan'}
        avatar={AvatarImg}
      />

      <Container>
        <Routes>
          <Route path={'/login'} element={<LoginForm />} />
          <Route path={'/signUp'} element={<SignUpForm />} />
          {/*<CheckEmail />*/}
          {/*<CreateNewPassword />*/}
          <Route
            path={'/editProfile'}
            element={
              <EditProfile
                avatar={avatar}
                userName={name}
                changeName={changeName}
                changeAvatar={changeAvatar}
                email={'lalala@mail.com'}
              />
            }
          />
          {/*<AddNewCardModal width={'wide'} trigger={<Button>123123</Button>} />*/}
          <Route path={'/forgotPassword'} element={<ForgotPasswordForm />} />
          <Route path={'/'} element={<DecksList />} />
          {/*<FriendDecks />*/}
          {/*<MyDeck />*/}
          <Route path={'/*'} element={<Error404 />} />
        </Routes>
      </Container>
    </div>
  )
}
