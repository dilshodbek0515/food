import hero_img from '../../assets/images/hero.png'
const Hero = () => {
  return (
    <main className='w-full h-auto p-5'>
      <div className='container mx-auto flex items-center justify-between gap-5 border-2'>
        <div className='flex flex-col gap-5'>
          <h4>Вкусная еда ждет тебя!</h4>
          <button>Посмотреть меню</button>
        </div>
        <img src={hero_img} alt='img' />
      </div>
    </main>
  )
}

export default Hero
