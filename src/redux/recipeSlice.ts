import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Recipe {
  id: number
  name: string
  cuisine: string
  tags: string[]
  image: string
}

interface RecipeState {
  recipes: Recipe[]
}

// LocalStorage'dan ma'lumotni olish
const loadRecipesFromStorage = (): Recipe[] => {
  const storedRecipes = localStorage.getItem('recipes')
  return storedRecipes ? JSON.parse(storedRecipes) : []
}

const initialState: RecipeState = {
  recipes: loadRecipesFromStorage()
}

const recipeSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    setRecipes (state, action: PayloadAction<Recipe[]>) {
      state.recipes = action.payload
      localStorage.setItem('recipes', JSON.stringify(state.recipes))
    },
    addRecipe (state, action: PayloadAction<Recipe>) {
      const existingRecipe = state.recipes.find(r => r.id === action.payload.id)
      if (!existingRecipe) {
        state.recipes.push(action.payload)
        localStorage.setItem('recipes', JSON.stringify(state.recipes))
      }
    }
  }
})

export const { setRecipes, addRecipe } = recipeSlice.actions
export default recipeSlice.reducer
