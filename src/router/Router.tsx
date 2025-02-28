import { useRoutes } from 'react-router-dom'
import Layout from '../pages/layout/Layout'
import Home from '../pages/home/Home'
import Menu from '../pages/menu_page/Menu_page'
import Gallery from '../pages/gallery_page/Gallery_page'
import Booking from '../pages/booking/Booking'
import About from '../pages/about/About'
import Contact from '../pages/contact/Contact'
import Detail from '../pages/detail/Detail'
import Error from '../pages/error/Error'
import Login from '../pages/login/Login'
import Korzina from '../pages/korzina/Korzina'
import Likes from '../pages/likes/Likes'

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
              path: '/',
              element: <Home />
            },
            {
              path: '/menu',
              element: <Menu />
            },
            {
              path: '/news',
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
              path: '/detail/:id',
              element: <Detail />
            },
            {
              path: '/likes',
              element: <Likes />
            },
            {
              path: '/korzina',
              element: <Korzina />
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
