import { FaInstagram, FaTelegram, FaWhatsapp } from 'react-icons/fa'
import { IoLogoFacebook } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='w-full h-auto footer_bg mt-40'>
      <div className='opacite p-5 py-20'>
        <div className='container mx-auto flex justify-between'>
          <div className='flex flex-col items-start gap-5'>
            <Link to={'/home'}>
              <h4 className='text-5xl font-extrabold max-xl:text-3xl'>LOGO</h4>
            </Link>
            <div className='flex items-center gap-3 text-2xl'>
              <FaTelegram />
              <FaWhatsapp />
              <IoLogoFacebook />
              <FaInstagram />
            </div>
          </div>
          <div className='flex flex-col items-start gap-2'>
            <h3 className='text-2xl text-black font-bold'>Our services</h3>
            <p className='text-xl text-black'>Prices</p>
            <p className='text-xl text-black'>Tracking</p>
            <p className='text-xl text-black'>Report a bug</p>
            <p className='text-xl text-black'>Terms of Service</p>
          </div>
          <div className='flex flex-col items-start gap-2'>
            <h3 className='text-2xl text-black font-bold'>Our company</h3>
            <p className='text-xl text-black'>Reporting</p>
            <p className='text-xl text-black'>Contact us</p>
            <p className='text-xl text-black'>Control</p>
          </div>
          <div className='flex flex-col items-start gap-2'>
            <h3 className='text-2xl text-black font-bold'>Address</h3>
            <p className='text-xl text-black w-60'>
              Uzbekistan, Tashkent Street, 24
            </p>
            <p className='text-xl text-black'>+99894848844848</p>
            <p className='text-xl text-black'>info@bmgsoft.com</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
