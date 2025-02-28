import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../../components/loading/Loading'
import Error from '../error/Error'
import Star from '../../components/star/Star'
import { FaMinus, FaPlus } from 'react-icons/fa'

interface Recipe {
  id: number
  name: string
  image: string
  tags: string
  price: number
  instructions: string
}

const Detail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [product, setProduct] = useState<Recipe | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [count, setCount] = useState<number>(0)

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

  return (
    <div className='w-full h-auto p-5 mt-44'>
      <div className='container mx-auto rounded-2xl p-10 flex flex-col items-center justify-center gap-20 detail_bg'>
        <h2 className='text-5xl text-black font-mono'>{product.tags[0]}</h2>
        <div className='flex items-center justify-center gap-32'>
          <img
            className='w-[500px] h-[500px] object-cover rounded-full border-2 border-gray-500 p-3 hover:p-0 hover:border-none duration-300'
            src={product.image}
            alt={product.name}
          />
          <div className='flex items-start flex-col gap-5'>
            <h2 className='text-4xl font-bold text-black mb-10'>
              {product.name}
            </h2>
            <div className='flex items-center gap-5 h-8'>
              <strong className='text-2xl font-bold font-mono'>$ 10.0</strong>
              <Star />
            </div>
            <p className='text-xl font-mono text-black'>Description :</p>
            <p className='text-gray-600 text-xl w-[500px]'>
              {product.instructions}
            </p>
            <div className='flex items-center gap-10'>
              <button className='w-44 h-12 bg-gray-200 rounded-lg text-black text-xl flex items-center justify-between px-5'>
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
              </button>
              <button className='w-44 h-12 bg-black rounded-lg text-white text-xl hover:opacity-85'>
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
