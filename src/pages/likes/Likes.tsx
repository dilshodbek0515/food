import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { FaCartPlus, FaHeart } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { toggleLike } from '../../redux/likesSlice'
import { Link } from 'react-router-dom'

const Likes: React.FC = () => {
  useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
  const likedItems = useSelector((state: any) => state.likes)
  const dispatch = useDispatch()

  const handleLike = (item: any) => {
    dispatch(toggleLike(item))
  }

  return (
    <div className='w-full h-auto p-5 mt-32 flex flex-col items-center gap-20'>
      <h2 className='text-center text-7xl text-black font-bold max-md:text-4xl'>
       Likes
      </h2>
      {likedItems.length === 0 ? (
        <div className='flex items-center justify-center mt-20 flex-col gap-10'>
          <img
            src='https://danielyansweets.am/images/favorite-empty-result.svg'
            alt='img'
          />
          <Link to={'/menu'}>
            <button className='w-64 h-16 header_bg rounded-xl hover:bg-sky-100'>
              Go Menu
            </button>
          </Link>
        </div>
      ) : (
        <div className='container mx-auto grid grid-cols-4 gap-5 max-2xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1'>
          {likedItems.map((item: any) => (
            <div
              className='h-auto rounded-xl p-5 flex flex-col gap-3 header_bg'
              key={item.id}
            >
              <div className='w-full h-[80%] rounded-xl overflow-hidden'>
                <img
                  className=' object-cover rounded-xl hover:scale-110 duration-300 cursor-pointer'
                  src={item.image}
                  alt='img'
                />
              </div>
              <div className='flex items-center justify-between gap-2'>
                <h3 className='text-xl font-bold'>{item.name}</h3>
                <FaHeart
                  onClick={() => handleLike(item)}
                  className='text-2xl cursor-pointer text-red-500'
                />
              </div>
              <p className='text-black text-xl font-mono'>{item.tags}</p>
              <div className='flex items-center justify-between gap-2'>
                <h3 className='text-2xl font-bold'>$ 10.0</h3>
                <FaCartPlus className='text-2xl cursor-pointer' />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Likes
