import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom'

import { useMeQuery } from './app/services'
import { CheckEmail } from './components/auth/checkEmail'
import { CreateNewPassword } from './components/auth/createNewPassword'
import { ForgotPasswordForm } from './components/auth/forgotPassword'
import { LoginForm } from './components/auth/loginForm'
import { SignUpForm } from './components/auth/signUpForm'
import { DecksList } from './components/Decks/decksList/decksList.tsx'
import { MyDeck } from './components/Decks/myDeck'
import { Layout } from './components/layout'
import { EditProfile } from './components/profile/editProfile'
import { Error404 } from './pages/error404/error404.tsx'

export function App() {
  const protectedRoutes = [
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
      element: <EditProfile />,
    },
    {
      path: '/*',
      element: <Error404 />,
    },
  ]

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          element: <ProtectedRoutes />,
          children: protectedRoutes,
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
          path: '/create-new-password/:token',
          element: <CreateNewPassword />,
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}

const ProtectedRoutes = () => {
  const { data, isLoading } = useMeQuery()

  if (isLoading) return <div>Loading...</div>

  return data ? <Outlet /> : <Navigate to={'/login'} />
}
