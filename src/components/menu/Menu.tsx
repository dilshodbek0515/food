import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaCartPlus, FaRegHeart } from 'react-icons/fa'
interface Recipe {
  id: number
  name: string
  image: string
  tags: string
  price: number
}

const Menu: React.FC = () => {
  const [pizza, setPizza] = useState<any>([])
  useEffect(() => {
    axios
      .get('https://dummyjson.com/recipes')
      .then(res => {
        setPizza(res.data.recipes)
        console.log(res.data.recipes)
      })
      .catch(err => console.log(err))
      .finally()
  }, [])
  return (
    <div className='w-full h-auto p-5 mt-32'>
      <div className='flex flex-col gap-20'>
        <h2 className='text-center text-7xl text-black font-bold max-md:text-4xl'>
          Popular dishes
        </h2>
        <div className='container mx-auto grid grid-cols-4 gap-5 max-2xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1'>
          {pizza?.slice(0, 8)?.map((item: Recipe) => (
            <div
              className='h-auto border-2 rounded-xl p-5 flex flex-col gap-3 header_bg'
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
                <FaRegHeart className='text-2xl cursor-pointer' />
              </div>
              <p className='text-black text-xl font-mono'>{item.tags[1]}</p>
              <div className='flex items-center justify-between gap-2'>
                <h3 className='text-2xl font-bold'>$ 10.0</h3>
                <FaCartPlus className='text-2xl cursor-pointer' />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Menu
