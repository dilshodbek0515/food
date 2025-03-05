import React, { useState } from 'react'
import { TextField, Button, Container, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import { addRecipe } from '../../../redux/recipeSlice'

interface Recipe {
  id: number
  image: string
  name: string
  difficulty: string
  price: string
}

const Create: React.FC = () => {
  const dispatch = useDispatch()
  const [recipe, setRecipe] = useState<Recipe>({
    id: 0,
    image: '',
    name: '',
    difficulty: '',
    price: ''
  })

  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      const response = await fetch('https://dummyjson.com/recipes/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          image: recipe.image,
          name: recipe.name,
          difficulty: [recipe.difficulty],
          price: recipe.price
        })
      })

      if (!response.ok) throw new Error('Failed to create recipe')

      const newRecipe = await response.json()

      // Unikal ID qo‘shish
      const recipeWithId = { ...newRecipe, id: Date.now() }

      dispatch(addRecipe(recipeWithId))

      setMessage('Recipe added successfully!')
      setRecipe({ id: 0, image: '', name: '', difficulty: '', price: '' })
    } catch (error) {
      setMessage('Error adding recipe.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container
      maxWidth='lg'
      sx={{ background: '#2e2c2cde', padding: '20px', borderRadius: '20px' }}
    >
      <Typography variant='h4' align='center' gutterBottom>
        Create Recipe
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label='Image URL'
          name='image'
          value={recipe.image}
          onChange={handleChange}
          fullWidth
          margin='normal'
          required
        />
        <TextField
          label='Name'
          name='name'
          value={recipe.name}
          onChange={handleChange}
          fullWidth
          margin='normal'
          required
        />
        <TextField
          label='Difficulty'
          name='difficulty'
          value={recipe.difficulty}
          onChange={handleChange}
          fullWidth
          margin='normal'
        />
        <TextField
          label='Price ($)'
          name='price'
          type='number'
          value={recipe.price}
          onChange={handleChange}
          fullWidth
          margin='normal'
          required
        />
        {message && <Typography color='primary'>{message}</Typography>}
        <Button
          type='submit'
          variant='contained'
          color='primary'
          fullWidth
          disabled={loading}
        >
          {loading ? 'Adding...' : 'Add Recipe'}
        </Button>
      </form>
    </Container>
  )
}

export default Create
