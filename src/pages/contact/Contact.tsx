import { BiSolidPhoneOutgoing } from 'react-icons/bi'
import { FaMapLocationDot } from 'react-icons/fa6'
import { TiDownload } from 'react-icons/ti'

const Contact = () => {
  return (
    <div className='w-full h-auto p-5 mt-32'>
      <div className='flex flex-col gap-20'>
        <h2 className='text-center text-7xl text-black font-bold max-md:text-4xl'>
          Our team
        </h2>
        <div className='container mx-auto grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1'>
          <div className='h-auto border-2 rounded-xl p-5 flex flex-col items-center gap-3 header_bg'>
            <TiDownload className='text-black text-7xl mb-10' />
            <h3 className='text-3xl font-bold'>Write to us</h3>
            <p className='text-black text-xl font-mono'>
              dilshodx516@gmail.com
            </p>
            <p className='text-black text-xl font-mono'>
              dilshodx516@gmail.com
            </p>
          </div>
          <div className='h-auto border-2 rounded-xl p-5 flex flex-col items-center gap-3 header_bg'>
            <BiSolidPhoneOutgoing className='text-black text-7xl mb-10' />
            <h3 className='text-3xl font-bold'>Call us</h3>
            <p className='text-black text-xl font-mono'>+998975790515</p>
            <p className='text-black text-xl font-mono'>+998975790515</p>
          </div>
          <div className='h-auto border-2 rounded-xl p-5 flex flex-col items-center gap-3 header_bg'>
            <FaMapLocationDot className='text-black text-7xl mb-10' />
            <h3 className='text-3xl font-bold'>Visit us</h3>
            <p className='text-black text-xl font-mono'>
              Uzbekistan, Tashkent Street, 8
            </p>
            <p className='text-black text-xl font-mono'>
              Uzbekistan, Tashkent Street, 8
            </p>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center gap-20 mt-32 container mx-auto'>
        <h2 className='text-center text-7xl text-black font-bold max-md:text-4xl'>
          Write to us
        </h2>
        <form className='flex flex-col gap-5 items-end w-[800px] max-lg:w-full'>
          <input
            className='w-full h-14 bg-transparent border-2 rounded-xl text-black text-xl px-5 outline-none'
            placeholder='Your name'
            type='text'
            required
          />
          <input
            className='w-full h-14 bg-transparent border-2 rounded-xl text-black text-xl px-5 outline-none'
            placeholder='Your email'
            type='email'
            required
          />
          <input
            className='w-full h-14 bg-transparent border-2 rounded-xl text-black text-xl px-5 outline-none'
            placeholder='Your phone'
            type='text'
            required
          />
          <input
            className='w-full h-14 bg-transparent border-2 rounded-xl text-black text-xl px-5 outline-none'
            placeholder='Your message'
            type='text'
            required
          />
          <button className='w-52 h-14 bg-black rounded-xl text-white text-xl'>
            Send
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
