import React, { memo } from 'react'
import hero_img from '../../assets/images/hero.png'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
const Hero: React.FC = () => {
  return (
    <main className='w-full h-auto p-5 mt-20 max-lg:mt-5'>
      <div className='container mx-auto flex items-center justify-between gap-5 p-5 max-md:flex-col-reverse'>
        <div className='flex flex-col gap-32 max-md:gap-10 max-md:items-center'>
          <h4 className='font-bold text-7xl text-black max-w-[500px] max-xl:text-5xl max-md:text-center max-sm:text-2xl'>
            Delicious food is waiting for you!
          </h4>
          <Link
            to={'/menu'}
            className='w-80 h-16 rounded-lg whitespace-nowrap header_bg flex items-center justify-center gap-5 text-xl hover:bg-slate-300 duration-150 max-md:w-[70%] max-sm:h-10 max-md:text-sm max-md:gap-2'
          >
            View menu <FaArrowRightLong />
          </Link>
        </div>
        <img
          className='w-[500px] max-xl:w-96 max-sm:w-72'
          src={hero_img}
          alt='img'
        />
      </div>
    </main>
  )
}

export default memo(Hero)
