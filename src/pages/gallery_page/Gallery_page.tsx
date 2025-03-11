import React, { memo, useEffect } from 'react'
import Gallery from '../../components/gallery/Gallery'
import Navoste from '../../components/navoste/Navoste'

const Gallery_page: React.FC = () => {
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

export default memo(Gallery_page)
