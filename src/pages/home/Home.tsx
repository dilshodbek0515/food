import React, { memo, useEffect } from 'react'
import Gallery from '../../components/gallery/Gallery'
import Hero from '../../components/hero/Hero'
import Menu from '../../components/menu/Menu'
import Whyus from '../../components/whyus/Whyus'

const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='mt-44'>
      <Hero />
      <Menu />
      <Whyus />
      <Gallery />
    </div>
  )
}

export default memo(Home)
