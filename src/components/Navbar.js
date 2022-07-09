import React from 'react';
import Logo from '../images/logo.png'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
      <>
      <div className='bg-gray-600 pl-12 border px-8 flex space-x-8 items-center'>
      <img className='w-[40px] md:w-[60px] text-xl md:text-3xl' src={Logo} />
    <Link to = '/' className='text-blue-400 font-bold text-xl md:text-3xl'>Movies</Link>
    <Link to = '/favorites' className='text-blue-400 font-bold text-xl md:text-3xl'>Favorites</Link>
    </div>
    </>
  )
}

export default Navbar;