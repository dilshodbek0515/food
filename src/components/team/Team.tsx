import React, { memo } from 'react'
import team1 from '../../assets/images/team1.png'
import team2 from '../../assets/images/team2.png'
import team3 from '../../assets/images/team3.png'
import team4 from '../../assets/images/team4.png'
import team5 from '../../assets/images/team5.png'
import team6 from '../../assets/images/team6.png'
const Team: React.FC = () => {
  return (
    <div className='w-full h-auto p-5 mt-32'>
      <div className='flex flex-col gap-20'>
        <h2 className='text-center text-7xl text-black font-bold max-md:text-4xl'>
          Our team
        </h2>
        <div className='container mx-auto grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1'>
          <div className='h-auto border-2 rounded-xl p-5 flex flex-col items-center gap-3 header_bg'>
            <div className='w-64 h-64 flex items-center justify-center overflow-hidden border-2 border-black rounded-full '>
              <img
                className=' object-cover rounded-xl hover:scale-110 duration-300 cursor-pointer'
                src={team1}
                alt='img'
              />
            </div>
            <h3 className='text-3xl font-bold'>Alexander Petro</h3>
            <p className='text-black text-xl font-mono'>head chef</p>
          </div>
          <div className='h-auto border-2 rounded-xl p-5 flex flex-col items-center gap-3 header_bg'>
            <div className='w-64 h-64 flex items-center justify-center overflow-hidden border-2 border-black rounded-full '>
              <img
                className=' object-cover rounded-xl hover:scale-110 duration-300 cursor-pointer'
                src={team2}
                alt='img'
              />
            </div>
            <h3 className='text-3xl font-bold'>Jamie Oliver</h3>
            <p className='text-black text-xl font-mono'>assistant cook</p>
          </div>
          <div className='h-auto border-2 rounded-xl p-5 flex flex-col items-center gap-3 header_bg'>
            <div className='w-64 h-64 flex items-center justify-center overflow-hidden border-2 border-black rounded-full '>
              <img
                className=' object-cover rounded-xl hover:scale-110 duration-300 cursor-pointer'
                src={team3}
                alt='img'
              />
            </div>
            <h3 className='text-3xl font-bold'>Massimo Bottura</h3>
            <p className='text-black text-xl font-mono'>Burger King</p>
          </div>
          <div className='h-auto border-2 rounded-xl p-5 flex flex-col items-center gap-3 header_bg'>
            <div className='w-64 h-64 flex items-center justify-center overflow-hidden border-2 border-black rounded-full '>
              <img
                className=' object-cover rounded-xl hover:scale-110 duration-300 cursor-pointer'
                src={team4}
                alt='img'
              />
            </div>
            <h3 className='text-3xl font-bold'>Rachel Green</h3>
            <p className='text-black text-xl font-mono'>waitress</p>
          </div>
          <div className='h-auto border-2 rounded-xl p-5 flex flex-col items-center gap-3 header_bg'>
            <div className='w-64 h-64 flex items-center justify-center overflow-hidden border-2 border-black rounded-full '>
              <img
                className=' object-cover rounded-xl hover:scale-110 duration-300 cursor-pointer'
                src={team5}
                alt='img'
              />
            </div>
            <h3 className='text-3xl font-bold'>Tiana</h3>
            <p className='text-black text-xl font-mono'>waitress</p>
          </div>
          <div className='h-auto border-2 rounded-xl p-5 flex flex-col items-center gap-3 header_bg'>
            <div className='w-64 h-64 flex items-center justify-center overflow-hidden border-2 border-black rounded-full '>
              <img
                className=' object-cover rounded-xl hover:scale-110 duration-300 cursor-pointer'
                src={team6}
                alt='img'
              />
            </div>
            <h3 className='text-3xl font-bold'>Melissa</h3>
            <p className='text-black text-xl font-mono'>waitress</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(Team)
