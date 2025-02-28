import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../../components/loading/Loading'
import Error from '../error/Error'
import Star from '../../components/star/Star'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { addToCart } from '../../redux/cartSlice'
import { useDispatch } from 'react-redux'
interface Recipe {
  id: number
  name: string
  image: string
  tags: string
  price: number
  instructions: string
}

const Detail: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const { id } = useParams<{ id: string }>()
  const [product, setProduct] = useState<Recipe | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [count, setCount] = useState<number>(0)
  const dispatch = useDispatch()

  useEffect(() => {
    setLoading(true)
    axios
      .get(`https://dummyjson.com/recipes/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) return <Loading />
  if (!product) return <Error />

  const handleKorzina = () => {
    if (product) {
      dispatch(
        addToCart({
          id: product.id,
          name: product.name,
          image: product.image,
          count
        })
      )
    }
    setCount(0)
  }
  return (
    <div className='w-full h-auto p-5 mt-44'>
      <div className='container mx-auto rounded-2xl p-10 flex flex-col items-center justify-between gap-20 detail_bg'>
        <h2 className='text-5xl text-black font-mono font-bold'>
          {product.tags[0]}
        </h2>
        <div className='flex items-center justify-center gap-32 max-xl:gap-10 max-lg:flex-col'>
          <img
            className='max-w-[500px] max-h-[500px] object-cover rounded-full border-2 border-gray-500 p-3 hover:p-0 hover:border-none duration-300 max-xl:w-96 max-xl:h-96 max-sm:w-full max-sm:h-full'
            src={product.image}
            alt={product.name}
          />
          <div className='flex items-start flex-col gap-5 max-sm:gap-0'>
            <h2 className='text-4xl font-bold text-black mb-10 max-sm:text-2xl'>
              {product.name}
            </h2>
            <div className='flex items-center gap-5 h-8 max-sm:flex-wrap max-sm:mb-20'>
              <strong className='text-2xl font-bold font-mono'>
                $ {10 * count}.0
              </strong>
              <Star />
            </div>
            <p className='text-xl font-mono text-black'>Description :</p>
            <p className='text-gray-600 text-xl w-[500px] max-sm:w-full max-sm:text-sm'>
              {product.instructions}
            </p>
            <div className='flex items-center gap-10 max-sm:flex-wrap max-sm:mt-10'>
              <div className='w-44 h-12 bg-gray-200 rounded-lg text-black text-xl flex items-center justify-between px-5'>
                <button
                  disabled={count === 0}
                  onClick={() => setCount(p => p - 1)}
                  className='disabled:cursor-not-allowed'
                >
                  <FaMinus />
                </button>
                <p>{count}</p>
                <button onClick={() => setCount(p => p + 1)}>
                  <FaPlus />
                </button>
              </div>
              <button
                onClick={handleKorzina}
                className='w-44 h-12 bg-black rounded-lg text-white text-xl hover:opacity-85'
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail
