import React from 'react'
import logo from './Plotologo.png'
const Header = () => {
  return (
    <div className='bg-cyan-500 w-full border-2 border-white pt-1'>
        <center>
        <img src={logo} className='w-44 m-2 mt-0'/>
        </center>
    </div>
  )
}

export default Header