import React, { useEffect, useState } from 'react'
import { FaEdit } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { setRecipes } from '../../../redux/recipeSlice'
import Loading from '../../../components/loading/Loading'

interface Recipe {
  id: number
  name: string
  cuisine: string
  tags: string[]
  image: string
}

const Manage: React.FC = () => {
  const dispatch = useDispatch()
  const recipes = useSelector(
    (state: { recipes: { recipes: Recipe[] } }) => state.recipes.recipes
  )
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    const storedRecipes = localStorage.getItem('recipes')
    if (storedRecipes) {
      dispatch(setRecipes(JSON.parse(storedRecipes)))
    } else {
      setLoading(true)
      fetch('https://dummyjson.com/recipes')
        .then(res => res.json())
        .then(data => {
          dispatch(setRecipes(data.recipes))
          localStorage.setItem('recipes', JSON.stringify(data.recipes)) // LocalStorage'ga saqlash
        })
        .catch(error => console.error('Error fetching recipes:', error))
        .finally(() => setLoading(false))
    }
  }, [dispatch])

  return (
    <div className='w-full flex items-center flex-col gap-10'>
      {loading ? (
        <Loading />
      ) : (
        <div className='container mx-auto grid grid-cols-4 gap-5'>
          {recipes?.map(recipe => (
            <div
              className='h-auto rounded-xl p-5 flex flex-col gap-3 header_bg'
              key={recipe.id}
            >
              <div className='w-full h-[80%] rounded-xl overflow-hidden'>
                <img
                  className='object-cover rounded-xl hover:scale-110 duration-300 cursor-pointer'
                  src={recipe.image}
                  alt='img'
                />
              </div>
              <h3
                className='text-black text-xl font-bold line-clamp-1 cursor-pointer'
                title={recipe.name}
              >
                {recipe.name}
              </h3>
              <p className='text-black text-xl font-mono'>{recipe.tags[0]}</p>
              <div className='flex items-center justify-between gap-2'>
                <h3 className='text-2xl font-bold text-black'>$ 10.0</h3>
                <FaEdit className='text-2xl cursor-pointer text-black' />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Manage
