import { Navigate, Outlet } from 'react-router-dom'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { auth } from '../auth/Auth'
import React, { memo } from 'react'
const Layout: React.FC = () => {
  return (
    <div>
      <Header />
      <main>{auth() ? <Outlet /> : <Navigate to={'/login'} />}</main>
      <Footer />
    </div>
  )
}

export default memo(Layout)
