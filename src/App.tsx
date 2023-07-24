import { useState } from 'react'

import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom'

import { useMeQuery } from './app/services'
import { CheckEmail } from './components/auth/checkEmail'
import { CreateNewPassword } from './components/auth/createNewPassword'
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
      element: <Layout />,
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
              path: '/*',
              element: <Error404 />,
            },
          ],
        },
        {
          path: '/signUp',
          element: <SignUpForm />,
        },
        {
          path: '/login',
          element: <LoginForm />,
        },
        {
          path: '/forgotPassword',
          element: <ForgotPasswordForm />,
        },
        {
          path: '/check-email',
          element: <CheckEmail />,
        },
        {
          path: '/create-new-password',
          element: <CreateNewPassword />,
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}

const ProtectedRoutes = () => {
  const { data, isLoading, error } = useMeQuery()

  console.log(data)
  console.log(error)
  if (isLoading) return <div>Loading...</div>

  return data ? <Outlet /> : <Navigate to={'/login'} />
}
