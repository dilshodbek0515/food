import React from 'react'
import { FaTaxi, FaUmbrellaBeach } from 'react-icons/fa'
import { GiCook } from 'react-icons/gi'
import { LuPizza } from 'react-icons/lu'
import { SlUserFollowing } from 'react-icons/sl'
import { TbSoup } from 'react-icons/tb'

const Whyus: React.FC = () => {
  return (
    <div className='w-full h-auto p-5 mt-32'>
      <div className='flex flex-col gap-20'>
        <h2 className='text-center text-7xl text-black font-bold max-md:text-4xl'>
          Why us?
        </h2>
        <div className='container mx-auto grid grid-cols-3 gap-5 max-2xl:grid-cols-2 max-md:grid-cols-1'>
          <div className='h-auto rounded-xl p-5 flex flex-col gap-7 header_bg'>
            <TbSoup className='text-6xl text-black' />
            <h3 className='text-3xl text-black font-bold max-md:text-2xl'>
              Качественные продукты
            </h3>
            <p className='text-xl text-black opacity-45 max-md:text-lg'>
              Entrance tickets to museums, to visit sights, monuments
            </p>
          </div>
          <div className='h-auto rounded-xl p-5 flex flex-col gap-7 header_bg'>
            <FaTaxi className='text-6xl text-black' />
            <h3 className='text-3xl text-black font-bold max-md:text-2xl'>
              Fast delivery
            </h3>
            <p className='text-xl text-black opacity-45 max-md:text-lg'>
              Entrance tickets to museums, to visit sights, monuments
            </p>
          </div>
          <div className='h-auto rounded-xl p-5 flex flex-col gap-7 header_bg'>
            <LuPizza className='text-6xl text-black' />
            <h3 className='text-3xl text-black font-bold max-md:text-2xl'>
              Delicious recipes
            </h3>
            <p className='text-xl text-black opacity-45 max-md:text-lg'>
              Entrance tickets to museums, to visit sights, monuments
            </p>
          </div>
          <div className='h-auto rounded-xl p-5 flex flex-col gap-7 header_bg'>
            <FaUmbrellaBeach className='text-6xl text-black' />
            <h3 className='text-3xl text-black font-bold max-md:text-2xl'>
              Cozy atmosphere
            </h3>
            <p className='text-xl text-black opacity-45 max-md:text-lg'>
              Entrance tickets to museums, to visit sights, monuments
            </p>
          </div>
          <div className='h-auto rounded-xl p-5 flex flex-col gap-7 header_bg'>
            <GiCook className='text-6xl text-black' />
            <h3 className='text-3xl text-black font-bold max-md:text-2xl'>
              Experienced Chefs
            </h3>
            <p className='text-xl text-black opacity-45 max-md:text-lg'>
              Entrance tickets to museums, to visit sights, monuments
            </p>
          </div>
          <div className='h-auto rounded-xl p-5 flex flex-col gap-7 header_bg'>
            <SlUserFollowing className='text-6xl text-black' />
            <h3 className='text-3xl text-black font-bold max-md:text-2xl'>
              Services
            </h3>
            <p className='text-xl text-black opacity-45 max-md:text-lg'>
              Entrance tickets to museums, to visit sights, monuments
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Whyus
