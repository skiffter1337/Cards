import { Outlet, useNavigate } from 'react-router-dom'

import { useLogoutMutation, useMeQuery } from '../../app/services'

import { Header } from './header'
import s from './laytout.module.scss'
export const Layout = () => {
  const { data } = useMeQuery()
  const [logout] = useLogoutMutation()
  const navigate = useNavigate()

  const logoutHandler = () => {
    logout().then(() => {
      navigate('/login')
    })
  }

  return (
    <>
      <Header userInfo={data} logout={logoutHandler} />
      <div className={s.outlet}>
        <Outlet />
      </div>
    </>
  )
}
