import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom';

import menu from './images/menu.png'

const Navbar = () => {

  const [lang, setLang] = useState(false)
  const nav =  useNavigate()
  const activeStyle = {
    fontWeight: "bold",
    color: "red"
  };



  return (
    <div>
        {/* navbar */}
    <div className={lang ? 'fixed top-[40%] left-[49%] md:left-[79%] w-[94%] md:w-[23%] ease-in-out duration-700  translate-y-[-50%] shadow-inner shadow-slate-500 rounded-lg p-1 md:p-2 bg-slate-900' : 'fixed w-[94%] md:w-[23%] left-[120%] top-[85%] ease-in-out duration-700'}>
    <NavLink exact to="/" activeClassName ='m-2 cursor-pointer text-lg font-bold text-cyan-400 text-2xl mb-5' className='m-2 cursor-pointer text-lg font-bold text-gray-200 mb-5'> 
    Home
    </NavLink>
    <hr/>
    <NavLink exact to="/news" activeClassName ='m-2 cursor-pointer text-lg font-bold text-cyan-400 text-2xl mb-5' className='m-2 cursor-pointer text-lg font-bold text-gray-200 mb-5'> 
    News
    </NavLink>
    {/* <NavLink exact to="/news" activeStyle={activeStyle}> 
    <h1  className='m-2 cursor-pointer text-lg font-bold text-gray-200 mb-5'>News</h1>
    </NavLink> */}
    </div>
    {!lang ? <img onClick={()=>setLang(!lang)} src={menu} className='w-9 md:w-9 cursor-pointer fixed top-[75.4%] opacity-80 animate-bounce md:top-[73%] active:animate-spin border-0 border-gray-100 left-[85.3%] md:left-[82.8%]'/> : <h1 onClick={()=>setLang(!lang)} className='w-10 md:w-12 fixed top-[75.4%] animate-pulse md:top-[71.5%] active:animate-spin text-2xl font-bold left-[88.7%] cursor-pointer md:left-[83.5%]'>X</h1>}
    </div>
  )
}

export default Navbar