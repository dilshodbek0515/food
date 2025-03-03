import { createSlice } from '@reduxjs/toolkit'

interface Recipe {
  id: number
  name: string
  image: string
  tags: string
  isLiked: boolean
}

const initialState: Recipe[] = JSON.parse(localStorage.getItem('likes') || '[]')

const likesSlice = createSlice({
  name: 'likes',
  initialState,
  reducers: {
    toggleLike: (state, action) => {
      const exists = state.find(item => item.id === action.payload.id)
      let newState
      if (exists) {
        newState = state.filter(item => item.id !== action.payload.id)
      } else {
        newState = [...state, action.payload]
      }
      localStorage.setItem('likes', JSON.stringify(newState))
      return newState
    }
  }
})

export const { toggleLike } = likesSlice.actions
export default likesSlice.reducer
