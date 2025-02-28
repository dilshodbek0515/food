import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { FaTrash } from 'react-icons/fa'
import { removeFromCart } from '../../redux/cartSlice'
import { Link } from 'react-router-dom'
const Korzina: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart.items)
  const dispatch = useDispatch()
  if (cart.length === 0) {
    return (
      <div className='flex items-center justify-center flex-col gap-14 mt-44'>
        <img
          className='w-96 h-96 rounded-2xl'
          src='https://static.vecteezy.com/system/resources/thumbnails/005/006/007/small/no-item-in-the-shopping-cart-click-to-go-shopping-now-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg'
          alt='empty'
        />
        <Link to={'/menu'}>
          <button className='w-64 h-16 header_bg rounded-xl'>Go Menu</button>
        </Link>
      </div>
    )
  }
  const handleRemoveItem = (id: number) => {
    dispatch(removeFromCart(id))
  }
  return (
    <div className='mt-44 w-full h-auto p-5 flex flex-col items-center gap-16'>
      <h2 className='text-7xl text-black font-bold'>Korzina (Cart)</h2>
      <div className='container mx-auto header_bg rounded-xl p-5 grid grid-cols-1 gap-10'>
        {cart.map(item => (
          <div
            key={item.id}
            className='w-full h-auto flex items-center justify-between gap-16 bg-slate-200 p-5 rounded-xl'
          >
            <div className='flex items-center gap-16'>
              <img
                src={item.image}
                alt={item.name}
                className='w-40 h-40 object-cover rounded-full hover:scale-110 duration-300'
              />
              <div className='flex gap-5'>
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
              <h3 className='text-3xl font-bold'>{item.name}</h3>
              <strong className='text-xl'>Price: $ {10 * item.count}.0</strong>
              <p className='text-lg text-black '>Count: {item.count}</p>
            </div>
            <FaTrash
              onClick={() => handleRemoveItem(item.id)}
              className='text-red-500 text-3xl cursor-pointer'
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Korzina
