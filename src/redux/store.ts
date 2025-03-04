// store.ts
import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
import likesReducer from './likesSlice'
import authReducer from './authSlice'
import recipeReducer from './recipeSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    likes: likesReducer,
    auth: authReducer,
    recipes: recipeReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
