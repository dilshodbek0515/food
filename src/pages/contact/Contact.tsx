import React, { memo, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { BiSolidPhoneOutgoing } from 'react-icons/bi'
import { FaMapLocationDot } from 'react-icons/fa6'
import { TiDownload } from 'react-icons/ti'

const Contact: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const BOT_TOKEN = '7663778517:AAHLTijMCfFznDWG_1RuAK8YxoRBhYsWPe4'
  const CHAT_ID = '6891591255'

  const handleChange = async () => {
    const text = `📩 *Yangi xabar*%0A👤 Ism: ${name}%0A📧 Email: ${email}%0A📞 Telefon: ${phone}%0A💬 Xabar: ${message}`
    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}&parse_mode=Markdown`

    try {
      const response = await fetch(url)
      if (response.ok) {
        toast.success(' Xabar muvaffaqiyatli yuborildi!')
        setName('')
        setEmail('')
        setPhone('')
        setMessage('')
      } else {
        toast.error(' Xabar yuborishda xatolik yuz berdi.')
      }
    } catch (error) {
      toast.error(" Tarmoq xatosi. Qaytadan urinib ko'ring.")
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name && email && phone && message) {
      handleChange()
    } else {
      toast.error("⚠️ Iltimos, barcha maydonlarni to'ldiring.")
    }
  }

  return (
    <div className='w-full h-auto p-5 mt-44'>
      <div className='flex flex-col gap-20'>
        <h2 className='text-center text-7xl text-black font-bold max-md:text-4xl'>
          Our team
        </h2>
        <div className='container mx-auto grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1'>
          <div className='h-auto border-2 rounded-xl p-5 flex flex-col items-center gap-3 header_bg'>
            <TiDownload className='text-black text-7xl mb-10' />
            <h3 className='text-3xl font-bold'>Write to us</h3>
            <p className='text-black text-xl font-mono'>
              dilshodx516@gmail.com
            </p>
            <p className='text-black text-xl font-mono'>
              dilshodx516@gmail.com
            </p>
          </div>
          <div className='h-auto border-2 rounded-xl p-5 flex flex-col items-center gap-3 header_bg'>
            <BiSolidPhoneOutgoing className='text-black text-7xl mb-10' />
            <h3 className='text-3xl font-bold'>Call us</h3>
            <p className='text-black text-xl font-mono'>+998975790515</p>
            <p className='text-black text-xl font-mono'>+998975790515</p>
          </div>
          <div className='h-auto border-2 rounded-xl p-5 flex flex-col items-center gap-3 header_bg'>
            <FaMapLocationDot className='text-black text-7xl mb-10' />
            <h3 className='text-3xl font-bold'>Visit us</h3>
            <p className='text-black text-xl font-mono'>
              Uzbekistan, Tashkent Street, 8
            </p>
            <p className='text-black text-xl font-mono'>
              Uzbekistan, Tashkent Street, 8
            </p>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center gap-20 mt-32 container mx-auto'>
        <h2 className='text-center text-7xl text-black font-bold max-md:text-4xl'>
          Write to us
        </h2>
        <form
          onSubmit={handleSubmit}
          className='flex flex-col gap-5 items-end w-[800px] max-lg:w-full'
        >
          <input
            className='w-full h-14 bg-transparent border-2 rounded-xl text-black text-xl px-5 outline-none'
            placeholder='Your name'
            type='text'
            required
            onChange={e => setName(e.target.value)}
            value={name}
          />
          <input
            className='w-full h-14 bg-transparent border-2 rounded-xl text-black text-xl px-5 outline-none'
            placeholder='Your email'
            type='email'
            required
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
          <input
            className='w-full h-14 bg-transparent border-2 rounded-xl text-black text-xl px-5 outline-none'
            placeholder='Your phone'
            type='text'
            required
            onChange={e => setPhone(e.target.value)}
            value={phone}
          />
          <input
            className='w-full h-14 bg-transparent border-2 rounded-xl text-black text-xl px-5 outline-none'
            placeholder='Your message'
            type='text'
            required
            onChange={e => setMessage(e.target.value)}
            value={message}
          />
          <button
            type='submit'
            className='w-52 h-14 bg-black rounded-xl text-white text-xl'
          >
            Send
          </button>
        </form>
      </div>
    </div>
  )
}

export default memo(Contact)
