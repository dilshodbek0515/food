import './App.css'
import Router from './router/Router'
import { IoMdArrowRoundUp } from 'react-icons/io'

function App () {
  return (
    <>
      <Router />

      <a
        href='#'
        className='fixed bottom-5 right-5 border-2 border-black p-1 rounded-full duration-300 hover:p-3'
      >
        <IoMdArrowRoundUp className='text-black text-3xl' />
      </a>
    </>
  )
}

export default App
