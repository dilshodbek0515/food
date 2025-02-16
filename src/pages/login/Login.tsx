import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { login } from '../auth/Auth'

const Login: React.FC = () => {
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const navigate = useNavigate()

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
    <div className='text-center mt-20'>
      <h2>Login</h2>
      <input
        type='text'
        placeholder='Ismingiz'
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <br />
      <input
        type='text'
        placeholder='Familiyangiz'
        value={surname}
        onChange={e => setSurname(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>Login</button>
      <Toaster position='top-center' reverseOrder={false} />
    </div>
  )
}

export default Login
