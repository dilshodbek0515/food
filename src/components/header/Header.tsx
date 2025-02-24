import { FaCartArrowDown, FaRegHeart, FaUser } from 'react-icons/fa'
import { LuLogOut } from 'react-icons/lu'
import { Link, useNavigate } from 'react-router-dom'
import { logOut } from '../../pages/auth/Auth'
import toast, { Toaster } from 'react-hot-toast'
import { IoMenu } from 'react-icons/io5'
const Header = () => {
  const navigate = useNavigate()
  const handlelogOut = () => {
    logOut()
    setTimeout(() => {
      toast.success('Siz login qismga qaytdingiz !')
      navigate('/login')
    }, 500)
  }
  return (
    <header className='w-full h-auto p-5'>
      <div className='container mx-auto p-10 header_bg rounded-xl flex items-center justify-between gap-5 max-sm:p-2'>
        <Link to={'/'}>
          <h2 className='text-5xl font-extrabold max-xl:text-3xl'>LOGO</h2>
        </Link>
        <ul className='flex items-center justify-center gap-10 max-xl:gap-5 max-md:hidden'>
          <li className='text-xl duration-200 hover:text-gray- whitespace-nowrap max-xl:text-sm'>
            <Link to={'/menu'}>Menu</Link>
          </li>
          <li className='text-xl duration-200 hover:text-gray- whitespace-nowrap max-xl:text-sm'>
            <Link to={'/gallery'}>News</Link>
          </li>
          <li className='text-xl duration-200 hover:text-gray- whitespace-nowrap max-xl:text-sm'>
            <Link to={'/booking'}>Booking</Link>
          </li>
          <li className='text-xl duration-200 hover:text-gray- whitespace-nowrap max-xl:text-sm'>
            <Link to={'/about'}>About Us</Link>
          </li>
          <li className='text-xl duration-200 hover:text-gray- whitespace-nowrap max-xl:text-sm'>
            <Link to={'/contact'}>Contacts</Link>
          </li>
        </ul>
        <div className='flex items-center justify-center gap-3'>
          <div className='w-10 h-10 rounded-full border-2 border-black flex items-center justify-center text-xl cursor-pointer max-xl:w-7 max-xl:h-7 max-xl:text-sm'>
            <FaRegHeart />
          </div>
          <div className='w-10 h-10 rounded-full border-2 border-black flex items-center justify-center text-xl cursor-pointer max-xl:w-7 max-xl:h-7 max-xl:text-sm'>
            <FaCartArrowDown />
          </div>
          <div className='w-10 h-10 rounded-full border-2 border-black flex items-center justify-center text-xl cursor-pointer max-xl:w-7 max-xl:h-7 max-xl:text-sm'>
            <FaUser />
          </div>
          <div
            className='w-10 h-10 rounded-full border-2 border-black flex items-center justify-center text-xl cursor-pointer max-xl:w-7 max-xl:h-7 max-xl:text-sm'
            onClick={handlelogOut}
          >
            <LuLogOut />
          </div>
          <div
            className='w-10 h-10 rounded-full border-2 border-black flex items-center justify-center text-xl cursor-pointer max-xl:w-7 max-xl:h-7 max-xl:text-sm'
            style={{ display: 'none' }}
            onClick={handlelogOut}
          >
            <IoMenu />
          </div>
        </div>
      </div>
      <Toaster position='top-center' reverseOrder={false} />
    </header>
  )
}

export default Header
