import { useEffect } from 'react'
import Gallery from '../../components/gallery/Gallery'
import Navoste from '../../components/navoste/Navoste'

const Gallery_page = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='mt-44'>
      <Navoste />
      <Gallery />
    </div>
  )
}

export default Gallery_page
