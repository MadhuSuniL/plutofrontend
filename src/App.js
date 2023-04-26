import Home from "./homepage/Home"
import Word from "./mainpage/Word"
import News from "./news/News"
import React from 'react'
import { BrowserRouter , Route ,Routes } from "react-router-dom"




const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<Home/>}/> 
    <Route exact path="/pluto" element={<Word/>}/> 
    <Route exact path="/news/:type" element={<News/>}/> 
    </Routes>
    </BrowserRouter>
  )
}
export default App
