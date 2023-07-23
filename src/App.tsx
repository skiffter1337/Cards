import { useState } from 'react'

import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom'

import { useMeQuery } from './app/services'
import { EditProfile } from './components/auth/editProfile'
import { ForgotPasswordForm } from './components/auth/forgotPassword'
import { LoginForm } from './components/auth/loginForm'
import { SignUpForm } from './components/auth/signUpForm'
import { DecksList } from './components/Decks/decksList/decksList.tsx'
import { MyDeck } from './components/Decks/myDeck'
import { Layout } from './components/layout'
import AvatarImg from './images/png/avatar.png'
import { Error404 } from './pages/error404/error404.tsx'

export function App() {
  // useState and onClickHandler are temporary logic to test UI
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true)

  const changeIsLoggedIn = () => {
    setIsLoggedIn(!isLoggedIn)
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
  //
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Layout
          avatar={avatar}
          userName={'Ivan'}
          email={'example@mail.ru'}
          changeIsLoggedIn={changeIsLoggedIn}
          isLoggedIn={isLoggedIn}
        />
      ),
      children: [
        {
          element: <ProtectedRoutes />,
          children: [
            {
              path: '/',
              element: <DecksList />,
            },
            {
              path: '/deck',
              element: <MyDeck />,
            },
            {
              path: '/editProfile',
              element: (
                <EditProfile
                  avatar={avatar}
                  userName={name}
                  changeName={changeName}
                  changeAvatar={changeAvatar}
                  email={'lalala@mail.com'}
                />
              ),
            },
            {
              path: '/forgotPassword',
              element: <ForgotPasswordForm />,
            },
            {
              path: '/signUp',
              element: <SignUpForm />,
            },
            {
              path: '/*',
              element: <Error404 />,
            },
          ],
        },
        {
          path: '/login',
          element: <LoginForm />,
        },
      ],
    },
  ])

  const { data, isLoading, isError, error } = useMeQuery()

  console.log({ data, isLoading, isError, error })

  return <RouterProvider router={router} />
}

const ProtectedRoutes = () => {
  const isLoggedIn = true

  return isLoggedIn ? <Outlet /> : <Navigate to={'/login'} />
}
