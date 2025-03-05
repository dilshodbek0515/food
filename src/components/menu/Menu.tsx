import React from 'react'
import { FaCartPlus, FaHeart, FaRegHeart } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../redux/cartSlice'
import toast from 'react-hot-toast'
import { toggleLike } from '../../redux/likesSlice'
import Loading from '../loading/Loading'

interface Recipe {
  id: number
  name: string
  image: string
  difficulty: string
}

interface CartItem {
  id: number
  name: string
  image: string
  count: number
}

const Menu: React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // Redux store'dan retseptlarni olish
  const recipes = useSelector(
    (state: { recipes: { recipes: Recipe[] } }) => state.recipes.recipes
  )
  const likedItems = useSelector((state: any) => state.likes)

  const handleKorzina = (item: CartItem) => {
    dispatch(addToCart({ ...item, count: 1 }))
    toast.success("Mahsulot savatga qo'shildi")
  }

  const handleLike = (item: Recipe) => {
    dispatch(toggleLike(item))
  }

  return (
    <div className='w-full h-auto p-5 mt-32'>
      <div className='flex flex-col gap-20'>
        <h2 className='text-center text-7xl text-black font-bold max-md:text-4xl'>
          Popular dishes
        </h2>
        {recipes.length === 0 ? (
          <Loading />
        ) : (
          <div className='container mx-auto grid grid-cols-4 gap-5 max-2xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1'>
            {recipes?.slice(0, 8)?.map((item: Recipe) => {
              const isLiked = likedItems.some(
                (liked: Recipe) => liked.id === item.id
              )

              return (
                <div
                  className='h-auto rounded-xl p-5 flex flex-col gap-3 header_bg'
                  key={item.id}
                >
                  <div
                    className='w-full h-[80%] rounded-xl overflow-hidden'
                    onClick={() => navigate(`/detail/${item.id}`)}
                  >
                    <img
                      className='object-cover rounded-xl hover:scale-110 duration-300 cursor-pointer'
                      src={item.image}
                      alt={item.name}
                    />
                  </div>
                  <div className='flex items-center justify-between gap-2'>
                    <h3 className='text-xl font-bold'>{item.name}</h3>
                    {isLiked ? (
                      <FaHeart
                        className='text-2xl cursor-pointer text-red-500'
                        onClick={() => handleLike(item)}
                      />
                    ) : (
                      <FaRegHeart
                        className='text-2xl cursor-pointer'
                        onClick={() => handleLike(item)}
                      />
                    )}
                  </div>
                  <p className='text-black text-xl font-mono line-clamp-1 cursor-pointer'>
                    {item.difficulty}
                  </p>
                  <div className='flex items-center justify-between gap-2'>
                    <h3 className='text-2xl font-bold'>$ 10.0</h3>
                    <FaCartPlus
                      onClick={() => handleKorzina({ ...item, count: 1 })}
                      className='text-2xl cursor-pointer'
                    />
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default Menu
