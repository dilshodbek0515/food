import React from 'react'
import g_img1 from '../../assets/images/gallery1.png'
import g_img2 from '../../assets/images/gallery2.png'
import g_img3 from '../../assets/images/gallery3.png'
import user from '../../assets/images/user.png'
const Gallery: React.FC = () => {
  return (
    <div className='w-full h-auto p-5 mt-32'>
      <div className='flex flex-col gap-20'>
        <h2 className='text-center text-7xl text-black font-bold max-md:text-4xl'>
          News/Gallery
        </h2>
        <div className='container mx-auto grid grid-cols-3 gap-5 max-2xl:grid-cols-2 max-md:grid-cols-1'>
          <div className='h-auto rounded-xl p-5 flex flex-col gap-7 header_bg'>
            <img
              className='w-[50%] h-[50%] rounded-xl max-sm:w-[60%]'
              src={g_img1}
              alt='img'
            />
            <p className='text-xl text-black opacity-45 max-md:text-sm '>
              Use agile structures to provide robust visibility for high-level
              overviews. Iterative approaches to enterprise data.
            </p>

            <div className='flex items-center gap-5'>
              <img className='w-14' src={user} alt='' />
              <h3 className='text-xl text-black font-bold max-md:text-lg'>
                Sergey
              </h3>
            </div>
          </div>
          <div className='h-auto rounded-xl p-5 flex flex-col gap-7 header_bg'>
            <img
              className='w-[50%] h-[50%] rounded-xl max-sm:w-[60%]'
              src={g_img2}
              alt='img'
            />
            <p className='text-xl text-black opacity-45 max-md:text-sm '>
              Use agile structures to provide robust visibility for high-level
              overviews. Iterative approaches to enterprise data.
            </p>
            <div className='flex items-center gap-5'>
              <img className='w-14' src={user} alt='' />
              <h3 className='text-xl text-black font-bold max-md:text-lg'>
                Sergey
              </h3>
            </div>
          </div>
          <div className='h-auto rounded-xl p-5 flex flex-col gap-7 header_bg'>
            <img
              className='w-[50%] h-[50%] rounded-xl max-sm:w-[60%]'
              src={g_img3}
              alt='img'
            />
            <p className='text-xl text-black opacity-45 max-md:text-sm '>
              Use agile structures to provide robust visibility for high-level
              overviews. Iterative approaches to enterprise data.
            </p>
            <div className='flex items-center gap-5'>
              <img className='w-14' src={user} alt='' />
              <h3 className='text-xl text-black font-bold max-md:text-lg'>
                Sergey
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery
