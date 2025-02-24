import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loading from '../loading/Loading'
interface Recipe {
  id: number
  image: string
  name: string
}

const Navoste: React.FC = () => {
  const [pizza, setPizza] = useState<any>([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    axios
      .get('https://dummyjson.com/recipes')
      .then(res => {
        setPizza(res.data.recipes)
        console.log(res.data.recipes)
      })
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
  }, [])
  return (
    <div className='w-full h-auto p-5 mt-32'>
      <div className='flex flex-col gap-20'>
        <h2 className='text-center text-7xl text-black font-bold max-md:text-4xl'>
          Gallery
        </h2>
        {loading ? (
          <Loading />
        ) : (
          <div className='container mx-auto grid grid-cols-5 gap-5 max-2xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1'>
            {pizza?.map((item: Recipe) => (
              <div
                className='h-auto border-2 rounded-xl p-5 flex flex-col gap-3 header_bg'
                key={item.id}
              >
                <div className='w-full h-full rounded-xl overflow-hidden'>
                  <img
                    className=' object-cover rounded-xl hover:scale-110 duration-300 cursor-pointer'
                    src={item.image}
                    alt='img'
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Navoste
