import { useRoutes } from 'react-router-dom'
import Layout from '../pages/layout/Layout'
import Home from '../pages/home/Home'
import Menu from '../pages/menu_page/Menu_page'
import Gallery from '../pages/gallery_page/Gallery_page'
import Booking from '../pages/booking/Booking'
import About from '../pages/about/About'
import Contact from '../pages/contact/Contact'
import Detail from '../pages/detail/Detail'
import Order from '../pages/order/Order'
import Error from '../pages/error/Error'
import Login from '../pages/login/Login'

const Router = () => {
  return (
    <div>
      {useRoutes([
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/',
          element: <Layout />,
          children: [
            {
              path: '/home',
              element: <Home />
            },
            {
              path: '/menu',
              element: <Menu />
            },
            {
              path: '/gallery',
              element: <Gallery />
            },
            {
              path: '/booking',
              element: <Booking />
            },
            {
              path: '/about',
              element: <About />
            },
            {
              path: '/contact',
              element: <Contact />
            },
            {
              path: '/detail',
              element: <Detail />
            },
            {
              path: '/order',
              element: <Order />
            }
          ]
        },
        {
          path: '*',
          element: <Error />
        }
      ])}
    </div>
  )
}

export default Router
