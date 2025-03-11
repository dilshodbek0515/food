import { Link } from 'react-router-dom'
import error from '../../assets/images/404.jpg'
import React, { memo } from 'react'
const Error: React.FC = () => {
  return (
    <div className='w-full h-auto gap-5'>
      <div className='container mx-auto flex flex-col items-center justify-center h-screen gap-10'>
        <img className='w-[50%] rounded-2xl' src={error} alt='' />
        <Link
          to={'/'}
          className='w-64 h-16 border-2 text-2xl text-red-600 rounded-3xl flex items-center justify-center hover:bg-sky-50 duration-300'
        >
          GO HOME
        </Link>
      </div>
    </div>
  )
}

export default memo(Error)
