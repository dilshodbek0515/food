import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { login } from '../auth/Auth'
import { Button } from '@mui/material'

const Login: React.FC = () => {
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const navigate = useNavigate()
  // login
  const handleLogin = () => {
    if (name && surname) {
      login({ name, surname })
      toast.success(`Tabriklaymiz siz ro'yxatdan o'tdingiz !`)
      setTimeout(() => {
        navigate('/home')
      }, 1000)
    } else {
      toast.error('Iltimos Ism Familiyangizni kiriting !!!')
    }
  }
  return (
    <div className='flex items-center justify-center w-full h-screen bgbg p-5'>
      <form className='w-[550px] h-[600px] bg-[#2e2c2cde] rounded-2xl flex items-center justify-center flex-col p-5 max-sm:h-[500px]'>
        <h2 className='text-5xl text-center font-bold text-white mb-20'>
          Login
        </h2>
        <input
          type='text'
          placeholder='Ismingiz'
          value={name}
          onChange={e => setName(e.target.value)}
          className='w-full h-16 rounded-md outline-none border-2 border-white bg-transparent px-5 py-1 text-white'
          required
        />
        <br />
        <input
          type='text'
          placeholder='Familiyangiz'
          value={surname}
          onChange={e => setSurname(e.target.value)}
          className='w-full h-16 rounded-md outline-none border-2 border-white bg-transparent px-5 py-1 text-white'
          required
        />
        <br />
        <Button
          variant='contained'
          disableElevation
          className='w-full h-16'
          sx={{ fontSize: 22 }}
          onClick={handleLogin}
        >
          Login
        </Button>
        <Toaster position='top-center' reverseOrder={false} />
      </form>
    </div>
  )
}

export default Login
