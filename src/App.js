import Word from "./mainpage/Word"
import News from "./news/News"
import React from 'react'
import { BrowserRouter , Route ,Routes } from "react-router-dom"




const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<Word/>}/> 
    <Route exact path="/news" element={<News/>}/> 
    </Routes>
    </BrowserRouter>
  )
}
export default App
