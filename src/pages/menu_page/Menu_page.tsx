import { useEffect } from 'react'
import Menu from '../../components/menu/Menu'

const Menu_page = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='mt-44'>
      <Menu />
    </div>
  )
}

export default Menu_page
