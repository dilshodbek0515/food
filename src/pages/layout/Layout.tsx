import { Navigate, Outlet } from 'react-router-dom'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { auth } from '../auth/Auth'
const Layout = () => {
  return (
    <div>
      <Header />
      <main>{auth() ? <Outlet /> : <Navigate to={'/login'} />}</main>
      <Footer />
    </div>
  )
}

export default Layout
