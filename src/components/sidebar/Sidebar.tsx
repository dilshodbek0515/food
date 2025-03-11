import React, { memo } from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Divider from '@mui/material/Divider'
import { IoMenu } from 'react-icons/io5'
import { Link } from 'react-router-dom'
const Sidebar: React.FC = () => {
  const [open, setOpen] = React.useState(false)
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen)
  }
  const DrawerList = (
    <Box
      sx={{
        width: 250,
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
      }}
    >
      <Link to={'/'} className='pl-5 pt-5'>
        <h2
          onClick={toggleDrawer(false)}
          className='text-5xl font-extrabold max-xl:text-3xl'
        >
          LOGO
        </h2>
      </Link>
      <Divider />
      <ul className='flex items-start justify-center flex-col gap-2 mt-5'>
        <li
          onClick={toggleDrawer(false)}
          className='text-xl duration-200 w-full rounded-xl whitespace-nowrap cursor-pointer pl-5 py-3 hover:text-white hover:bg-black'
        >
          <Link to={'/menu'}>Menu</Link>
        </li>
        <li
          onClick={toggleDrawer(false)}
          className='text-xl duration-200 w-full rounded-xl whitespace-nowrap cursor-pointer pl-5 py-3 hover:text-white hover:bg-black'
        >
          <Link to={'/news'}>News</Link>
        </li>
        <li
          onClick={toggleDrawer(false)}
          className='text-xl duration-200 w-full rounded-xl whitespace-nowrap cursor-pointer pl-5 py-3 hover:text-white hover:bg-black'
        >
          <Link to={'/booking'}>Booking</Link>
        </li>
        <li
          onClick={toggleDrawer(false)}
          className='text-xl duration-200 w-full rounded-xl whitespace-nowrap cursor-pointer pl-5 py-3 hover:text-white hover:bg-black'
        >
          <Link to={'/about'}>About Us</Link>
        </li>
        <li
          onClick={toggleDrawer(false)}
          className='text-xl duration-200  w-full rounded-xl whitespace-nowrap cursor-pointer pl-5 py-3 hover:text-white hover:bg-black'
        >
          <Link to={'/contact'}>Contacts</Link>
        </li>
      </ul>
    </Box>
  )
  return (
    <>
      <div
        onClick={toggleDrawer(true)}
        className='w-10 h-10 rounded-full border-2 border-black text-xl cursor-pointer max-xl:w-7 max-xl:h-7 max-xl:text-sm hidden max-md:block max-[767px]:flex max-md:items-center max-md:justify-center '
      >
        <IoMenu />
      </div>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  )
}

export default memo(Sidebar)
