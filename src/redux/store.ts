// store.ts
import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
import likesReducer from './likesSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    likes: likesReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
