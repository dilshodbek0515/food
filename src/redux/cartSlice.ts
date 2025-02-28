// features/cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CartItem {
  id: number
  name: string
  image: string
  count: number
  price: number
}

interface CartState {
  items: CartItem[]
}

const initialState: CartState = {
  items: JSON.parse(localStorage.getItem('cart') || '[]')
  // localStorage dan cart ma'lumotlarini olish
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(
        item => item.id === action.payload.id
      )
      if (existingItem) {
        existingItem.count += action.payload.count
      } else {
        state.items.push(action.payload)
      }
      // localStorage'ga saqlash
      localStorage.setItem('cart', JSON.stringify(state.items))
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload)
      // localStorage'ga yangilangan cartni saqlash
      localStorage.setItem('cart', JSON.stringify(state.items))
    },
    clearCart: state => {
      state.items = []
      localStorage.setItem('cart', JSON.stringify(state.items)) // cartni bo'shatish
    }
  }
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions
export default cartSlice.reducer
