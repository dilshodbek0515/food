import React, { useEffect, useState } from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { setRecipes } from '../../../redux/recipeSlice'
import Loading from '../../../components/loading/Loading'

interface Recipe {
  id: number
  name: string
  cuisine: string
  difficulty: string
  image: string
}

const Manage: React.FC = () => {
  const dispatch = useDispatch()
  const recipes = useSelector(
    (state: { recipes: { recipes: Recipe[] } }) => state.recipes.recipes
  )
  const [loading, setLoading] = useState<boolean>(false)
  const [modal, setModal] = useState<boolean>(false)
  const [selected, setSelected] = useState<Recipe | null>(null)

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
          localStorage.setItem('recipes', JSON.stringify(data.recipes))
        })
        .catch(error => console.error('Error fetching recipes:', error))
        .finally(() => setLoading(false))
    }
  }, [dispatch])

  const handleEdit = (recipe: Recipe) => {
    setSelected(recipe)
    setModal(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (selected) {
      setSelected({ ...selected, [e.target.name]: e.target.value })
    }
  }

  const handleSave = () => {
    if (selected) {
      const update = recipes.map(r => (r.id === selected.id ? selected : r))
      dispatch(setRecipes(update))
      localStorage.setItem('recipes', JSON.stringify(update))
      setModal(false)
    }
  }

  const handleDelete = (id: number) => {
    const updatedRecipes = recipes.filter(r => r.id !== id)

    dispatch(setRecipes(updatedRecipes))
    localStorage.setItem('recipes', JSON.stringify(updatedRecipes))
  }
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
              <p
                className='text-black text-xl font-mono line-clamp-1 cursor-pointer'
                title={recipe.difficulty}
              >
                {recipe.difficulty}
              </p>
              <div className='flex items-center justify-between gap-2'>
                <h3 className='text-2xl font-bold text-black'>$ 10.0</h3>
                <div className='flex gap-5'>
                  <FaEdit
                    onClick={() => handleEdit(recipe)}
                    className='text-2xl cursor-pointer text-yellow-600'
                  />
                  <FaTrash
                    onClick={() => handleDelete(recipe.id)}
                    className='text-2xl cursor-pointer text-red-500'
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {modal && selected && (
        <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center'>
          <div className='bg-white p-5 rounded-lg w-96'>
            <h2 className='text-xl font-bold mb-4 text-black'>Edit Recipe</h2>
            <input
              type='text'
              name='name'
              value={selected.name}
              onChange={handleChange}
              className='w-full p-2 border rounded mb-2'
              placeholder='Name'
            />
            <input
              type='text'
              name='difficulty'
              value={selected.difficulty}
              onChange={handleChange}
              className='w-full p-2 border rounded mb-2'
              placeholder='difficulty'
            />
            <input
              type='text'
              name='image'
              value={selected.image}
              onChange={handleChange}
              className='w-full p-2 border rounded mb-2'
              placeholder='Image URL'
            />
            <div className='flex justify-between mt-4'>
              <button
                onClick={() => setModal(false)}
                className='bg-gray-400 text-white px-4 py-2 rounded'
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className='bg-blue-500 text-white px-4 py-2 rounded'
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Manage
