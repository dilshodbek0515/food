import { FaCartArrowDown, FaRegHeart } from 'react-icons/fa'
import { LuLogOut } from 'react-icons/lu'
import { Link, useNavigate } from 'react-router-dom'
import { logOut } from '../../pages/auth/Auth'
import toast, { Toaster } from 'react-hot-toast'
import Sidebar from '../sidebar/Sidebar'
import { useSelector } from 'react-redux'

const Header = () => {
  const navigate = useNavigate()

  const handlelogOut = () => {
    logOut()
    setTimeout(() => {
      toast.success('Siz login qismga qaytdingiz !')
      navigate('/login')
    }, 400)
  }

  const likedItems = useSelector((state: any) => state.likes)
  const cartItems = useSelector((state: any) => state.cart.items)

  return (
    <header className='w-full h-auto fixed top-0 bg-slate-100 z-10'>
      <div className='container mx-auto p-10 rounded-xl flex items-center justify-between gap-5 max-sm:p-2'>
        <Link to={'/'}>
          <h2 className='text-5xl font-extrabold max-xl:text-3xl'>LOGO</h2>
        </Link>
        <ul className='flex items-center justify-center gap-10 max-xl:gap-5 max-md:hidden'>
          {['menu', 'news', 'booking', 'about', 'contact'].map(page => (
            <li
              key={page}
              className='text-xl duration-200 hover:text-red-500 whitespace-nowrap max-xl:text-sm'
            >
              <Link to={`/${page}`}>
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
        <div className='flex items-center justify-center gap-5'>
          <div className='relative'>
            <Link
              to={'/likes'}
              className='w-10 h-10 relative rounded-full border-2 border-black flex items-center justify-center text-xl cursor-pointer max-xl:w-7 max-xl:h-7 max-xl:text-sm'
            >
              <FaRegHeart />
              {likedItems.length > 0 && (
                <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full cursor-pointer'>
                  {likedItems.length}
                </span>
              )}
            </Link>
          </div>

          <div className='relative'>
            <Link
              to={'/korzina'}
              className='w-10 h-10 relative rounded-full border-2 border-black flex items-center justify-center text-xl cursor-pointer max-xl:w-7 max-xl:h-7 max-xl:text-sm'
            >
              <FaCartArrowDown />
              {cartItems.length > 0 && (
                <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full cursor-pointer'>
                  {cartItems.length}
                </span>
              )}
            </Link>
          </div>

          <div
            className='w-10 h-10 rounded-full border-2 border-black flex items-center justify-center text-xl cursor-pointer max-xl:w-7 max-xl:h-7 max-xl:text-sm'
            onClick={handlelogOut}
          >
            <LuLogOut />
          </div>

          <Sidebar />
        </div>
      </div>
      <Toaster position='top-center' reverseOrder={false} />
    </header>
  )
}

export default Header
