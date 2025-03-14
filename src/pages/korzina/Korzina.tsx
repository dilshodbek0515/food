import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { FaTrash } from 'react-icons/fa'
import { removeFromCart } from '../../redux/cartSlice'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios'
import { clearCart } from '../../redux/cartSlice'
const Korzina: React.FC = () => {
  useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
  const cart = useSelector((state: RootState) => state.cart.items)
  const dispatch = useDispatch()
  if (cart.length === 0) {
    return (
      <div className='flex items-center justify-center flex-col gap-14 mt-44'>
        <img
          className='w-96 h-96 rounded-2xl max-sm:w-72 max-sm:h-72'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-JGyBEKsrSjQWZJTJ-B8uNYsOGMbtasr3YA&s'
          alt='empty'
        />
        <Link to={'/menu'}>
          <button className='w-64 h-16 header_bg rounded-xl hover:bg-sky-100'>
            Go Menu
          </button>
        </Link>
      </div>
    )
  }
  const handleRemoveItem = (id: number) => {
    dispatch(removeFromCart(id))
    toast.success("Mahsulot o'chirib tashlandi")
  }

  const totalProducts = cart.reduce((sum, item) => sum + item.count, 0)
  const totalPrice = cart.reduce((sum, item) => sum + 10 * item.count, 0)

  const handleSend = async () => {
    const BOT_TOKEN = '7663778517:AAHLTijMCfFznDWG_1RuAK8YxoRBhYsWPe4'
    const CHAT_ID = '6891591255'
    const API_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`

    if (cart.length === 0) {
      toast.error("Korzina bo'sh")
      return
    }

    const orderDetails = cart
      .map(
        item =>
          `📌 *${item.name}*\n  📦 Soni: ${item.count}\n  💰 Narxi: $${
            10 * item.count
          }.0`
      )
      .join('\n\n')

    const message = `🛒 *Yangi Buyurtma!*\n\n${orderDetails}\n\n🔢 *Jami mahsulotlar:* ${totalProducts}\n💵 *Umumiy narx:* $${totalPrice}.0\n🚚 Yetkazib berish: *Bepul*`

    try {
      await axios.post(API_URL, {
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'Markdown'
      })
      dispatch(clearCart())
      toast.success('Buyurtma yuborildi!')
    } catch (error) {
      console.error('Telegram xatosi:', error)
      toast.error('Buyurtma yuborishda xatolik yuz berdi')
    }
  }

  return (
    <div className='flex flex-col gap-20'>
      <div className='mt-44 w-full h-auto p-5 flex flex-col items-center gap-16'>
        <h2 className='text-7xl text-black font-bold max-md:text-4xl'>
          Korzina (Cart)
        </h2>
        <div className='container mx-auto header_bg rounded-xl p-5 grid grid-cols-1 gap-10'>
          {cart.map(item => (
            <div
              key={item.id}
              className='w-full h-auto flex items-center justify-between gap-16 bg-slate-200 p-5 rounded-xl max-md:px-32 max-sm:px-10 max-[460px]:flex-col max-[460px]:gap-5'
            >
              <div className='flex items-center gap-16 max-lg:gap-5 max-md:flex-col'>
                <img
                  src={item.image}
                  alt={item.name}
                  className='w-40 h-40 object-cover rounded-full hover:scale-110 duration-300'
                />
                <div className='flex gap-5 max-xl:hidden'>
                  <img
                    src={item.image}
                    alt={item.name}
                    className='w-20 h-20 object-cover rounded-full hover:scale-110 duration-300'
                  />
                  <img
                    src={item.image}
                    alt={item.name}
                    className='w-20 h-20 object-cover rounded-full hover:scale-110 duration-300'
                  />
                  <img
                    src={item.image}
                    alt={item.name}
                    className='w-20 h-20 object-cover rounded-full hover:scale-110 duration-300'
                  />
                </div>
                <h3 className='text-3xl font-bold whitespace-nowrap max-2xl:text-xl'>
                  {item.name}
                </h3>
                <strong className='text-xl whitespace-nowrap'>
                  Price: $ {10 * item.count}.0
                </strong>
                <p className='text-lg text-black whitespace-nowrap '>
                  Count: {item.count}
                </p>
              </div>
              <FaTrash
                onClick={() => handleRemoveItem(item.id)}
                className='text-red-500 text-3xl cursor-pointer'
              />
            </div>
          ))}
        </div>
      </div>

      <div className='container mx-auto bg-white p-6 rounded-2xl shadow-lg border border-gray-200'>
        <h2 className='text-xl font-semibold text-center mb-4'>Your order</h2>
        <div className='space-y-3'>
          <div className='flex justify-between border-b pb-2'>
            <span>Products</span>
            <span className='font-medium'>{totalProducts}</span>
          </div>
          <div className='flex justify-between border-b pb-2'>
            <span>Delivery</span>
            <span className='font-medium'>For free</span>
          </div>
        </div>
        <div className='flex justify-between mt-4 text-lg font-semibold'>
          <span>Total:</span>
          <span> $ {totalPrice} .0</span>
        </div>
        <button
          onClick={handleSend}
          className='mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition'
        >
          Order
        </button>
      </div>
    </div>
  )
}

export default memo(Korzina)
