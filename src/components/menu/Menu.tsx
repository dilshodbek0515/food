import axios from 'axios'
import React, { useEffect, useState } from 'react'
interface Recipe {
  id: number
  name: string
  image: string
}

const Menu: React.FC = () => {
  const [pizza, setPizza] = useState<any>([])
  useEffect(() => {
    axios
      .get('https://dummyjson.com/recipes')
      .then(res => {
        setPizza(res.data.recipes)
        console.log(res.data.recipes)
      })
      .catch(err => console.log(err))
      .finally()
  }, [])
  return (
    <div className='w-full h-auto p-5'>
      <div className='container mx-auto grid grid-cols-4 gap-5'>
        {pizza?.map((item: Recipe) => (
          <div className='h-96 border-2 rounded-xl' key={item.id}>
            <h3>{item.name}</h3>
            <img src={item.image} alt='' />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Menu
