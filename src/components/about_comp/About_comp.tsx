import about_img from '../../assets/images/about.png'

const About_comp = () => {
  return (
    <div className='w-full h-auto p-5 flex flex-col gap-32 mt-20'>
      <div className='container mx-auto flex flex-col items-center gap-20'>
        <h2 className='text-7xl text-black font-bold max-sm:text-5xl'>
          About Us
        </h2>
        <div className='flex flex-col items-start gap-10'>
          <p className='w-full h-auto text-2xl max-md:text-lg'>
            Since 1995, our mission at the restaurant has been to nourish and
            inspire every team member, guest, and community we serve. All these
            years later, these core values ​​remain at the heart of everything
            we do. From our menu to our service to the way we do business, our
            fresh, unexpected, and human perspective sets us apart. We call it
            Extraordinary Kindness. And it’s in everything we do.
          </p>
          <p className='w-full h-auto text-2xl max-md:text-lg'>
            With more than 450 restaurants in 26 states and more than 8,000 team
            members, we have been named one of America's Best Employers for
            Diversity by Forbes two years in a row. Denver Business Journal has
            recognized us as one of the Best Places to Work. We believe these
            successes are rooted in our unique and caring culture, which makes
            everyone who walks through our doors feel welcome and valued.
          </p>
        </div>
      </div>
      <div className='container mx-auto flex items-center justify-between gap-52 max-xl:gap-10 max-lg:flex-col-reverse'>
        <div className='flex flex-col gap-10'>
          <h2 className='text-4xl text-black font-bold'>Our food</h2>
          <p className='text-2xl text-black w-full max-sm:text-lg'>
            Our passion is to create exceptional dining experiences at a great
            price. From traditional and contemporary dishes to our own culinary
            creations like premium stuffed tortelloni, our freshly prepared
            recipes are individual, creative and full of flavor from cuisines
            around the world. <br />
            <br /> From Penne Rosa to Japanese noodles, Honey Salad and our
            world famous Wisconsin Mac and Cheese, we use only the finest,
            healthiest ingredients. Every dish is prepared fresh and made to
            order. Our extensive menu is filled with bold, vibrant and
            satisfying flavors.
          </p>
        </div>
        <img className='w-[500px] max-xl:w-96' src={about_img} alt='' />
      </div>
      <div className='container mx-auto flex items-center justify-between gap-52 max-xl:gap-10 max-lg:flex-col'>
        <img className='w-[500px] max-xl:w-96' src={about_img} alt='' />
        <div className='flex flex-col gap-10'>
          <h2 className='text-4xl text-black font-bold'>Our way</h2>
          <p className='text-2xl text-black w-full max-sm:text-lg'>
            From the very beginning, we have made a commitment to offering fresh
            food, fresh ingredients, and a new way of taking care of our guests,
            our team members, and our communities. We truly believe that there
            is nothing that brings people together or makes the world a better
            place than a bowl of noodles. <br />
            <br />
            As we continue to grow, we’re implementing key initiatives across
            our company to support a brighter future. Our Impact Report explores
            some of these areas, such as creating menus filled with fresh and
            exciting new flavors; activating industry-leading benefits for
            people; and some ways to better care for our communities – and the
            planet – we call home.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About_comp
