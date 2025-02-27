import { useEffect } from 'react'
import About_comp from '../../components/about_comp/About_comp'
import Gallery from '../../components/gallery/Gallery'
import Team from '../../components/team/Team'

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='mt-44'>
      <About_comp />
      <Team />
      <Gallery />
    </div>
  )
}

export default About
