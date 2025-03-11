import Gallery from '../../components/gallery/Gallery'
import book from '../../assets/images/booking.png'
import React, { memo, useEffect } from 'react'
const Booking: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='w-full h-auto p-5 flex flex-col mt-44'>
      <div className='container mx-auto flex flex-col items-center justify-center gap-20'>
        <h2 className='text-center text-black font-bold text-7xl max-sm:text-5xl'>
          Booking
        </h2>
        <div className='w-full flex items-center gap-44 justify-between max-xl:gap-20 max-lg:flex-col-reverse'>
          <div className='flex flex-col items-start gap-5 flex-1 max-lg:w-full'>
            <h3 className='text-black font-bold text-3xl'>Opening hours</h3>
            <div className='w-full flex items-center justify-between gap-5 border-b-2 border-black p-2 max-sm:text-lg'>
              <p className='text-2xl font-mono'>Monday</p>
              <span className='text-xl text-black max-sm:text-lg'>
                10:00 -- 23:00
              </span>
            </div>
            <div className='w-full flex items-center justify-between gap-5 border-b-2 border-black p-2 max-sm:text-lg'>
              <p className='text-2xl font-mono'>Tuesday</p>
              <span className='text-xl text-black max-sm:text-lg'>
                10:00 -- 23:00
              </span>
            </div>
            <div className='w-full flex items-center justify-between gap-5 border-b-2 border-black p-2 max-sm:text-lg'>
              <p className='text-2xl font-mono'>Wednesday</p>
              <span className='text-xl text-black max-sm:text-lg'>
                10:00 -- 23:00
              </span>
            </div>
            <div className='w-full flex items-center justify-between gap-5 border-b-2 border-black p-2 max-sm:text-lg'>
              <p className='text-2xl font-mono'>Thursday</p>
              <span className='text-xl text-black max-sm:text-lg'>
                10:00 -- 23:00
              </span>
            </div>
            <div className='w-full flex items-center justify-between gap-5 border-b-2 border-black p-2 max-sm:text-lg'>
              <p className='text-2xl font-mono'>Friday</p>
              <span className='text-xl text-black max-sm:text-lg'>
                10:00 -- 23:00
              </span>
            </div>
            <div className='w-full flex items-center justify-between gap-5 border-b-2 border-black p-2 max-sm:text-lg'>
              <p className='text-2xl font-mono'>Saturday</p>
              <span className='text-xl text-black max-sm:text-lg'>
                10:00 -- 23:00
              </span>
            </div>
            <div className='w-full flex items-center justify-between gap-5 border-b-2 border-black p-2 max-sm:text-lg'>
              <p className='text-2xl font-mono'>Sunday</p>
              <span className='text-xl text-black max-sm:text-lg'>
                10:00 -- 23:00
              </span>
            </div>
          </div>
          <img
            className='w-[500px] max-xl:w-96 max-lg:w-[500px] max-sm:w-full'
            src={book}
            alt='img'
          />
        </div>
      </div>
      <Gallery />
    </div>
  )
}

export default memo(Booking)
