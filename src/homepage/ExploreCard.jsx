import React from 'react'
import { useNavigate } from 'react-router-dom'
const ExploreCard = (p) => {
  
  const nav = useNavigate()
  return (
    <div onClick={()=> nav(p.path)} className='cursor-pointer p-2 rounded-lg border-t-2 border-cyan-400 shadow-md hover:shadow-lg hover:shadow-cyan-400 hover:scale-105 duration-200 ease-linear shadow-cyan-400'>

    <h1 className='m-5 font-extrabold text-md text-cyan-3000 text-center'>{p.name}</h1>
    </div>
  )
}

export default ExploreCard