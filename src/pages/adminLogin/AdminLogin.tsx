import React, { memo, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../../redux/authSlice'
import { RootState } from '../../redux/store'
import { Button, CircularProgress } from '@mui/material'

const AdminLogin: React.FC = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch<any>()
  const navigate = useNavigate()
  const { loading, error } = useSelector((state: RootState) => state.auth)

  // Login function
  const handleLogin = async () => {
    if (!username || !password) {
      toast.error('Iltimos foydalanuvchi nomi va parolni kiriting!')
      return
    }

    const resultAction = await dispatch(loginUser({ username, password }))
    if (loginUser.fulfilled.match(resultAction)) {
      toast.success('Tabriklaymiz, siz muvaffaqiyatli tizimga kirdingiz!')
      navigate('/dashboard')
    } else {
      toast.error(resultAction.payload || 'Login muvaffaqiyatsiz tugadi!')
    }
  }

  return (
    <div className='flex items-center justify-center w-full h-screen bg-gray-800 p-5'>
      <form className='w-[400px] p-6 bg-gray-900 rounded-lg'>
        <h2 className='text-3xl text-center text-white mb-6'>Login</h2>
        <input
          type='text'
          placeholder='Foydalanuvchi nomi'
          value={username}
          onChange={e => setUsername(e.target.value)}
          className='w-full p-3 rounded-md bg-gray-700 text-white'
        />
        <input
          type='password'
          placeholder='Parol'
          value={password}
          onChange={e => setPassword(e.target.value)}
          className='w-full p-3 mt-4 rounded-md bg-gray-700 text-white'
        />
        <Button
          variant='contained'
          fullWidth
          sx={{ mt: 3, fontSize: 18 }}
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} color='inherit' /> : 'Kirish'}
        </Button>
        {error && <p className='text-red-500 text-center mt-2'>{error}</p>}
        <Toaster position='top-center' />
      </form>
    </div>
  )
}

export default memo(AdminLogin)
