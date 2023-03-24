import React from 'react'
import send from '../images/sentt.png'
import logo from '../images/cl.png'
import lang1 from '../images/lang.png'
import lang2 from '../images/lang2.png'
import sorry from '../images/sorry.gif'
import { useState , useEffect } from 'react';
import Typing from "../mainpage/components/Typing";



const Word = () => {

  const [spin, setspin] = useState('logounrotate')
  const [lang, setLang] = useState(false)
  const [langValue, setLangValue] = useState('en')
  const [newsIndex,setNewsIndex] = useState(0)  
  const [loading,setLoading] = useState(true)
  
  
  
const handleinput = async () => {
  setLang(false)
  setLoading(true)
  setspin('logorotate')
  await fetch(`${domain}get_news/`,{
    method:'GET',
    headers:{
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
  .then(res => res.json())
  .then(data => {
    setres(data)
    setspin('logounrotate')
    setLoading(false)
    
}) 
}
  
  
  
  
  
  
  
  
  
  
  
  // typing logo 
  const [logotext, setText] = useState("")
const [fullText, setFullText] = useState('PlutoNews')
const [index, setIndex] = useState(0)

useEffect(() => {
  if (index < fullText.length) {
    setTimeout(() => {
      setText(logotext + fullText[index])
      setIndex(index + 1)
    }, 30)
  }
}, [index])


const [logotext2, setText2] = useState("")
const [fullText2, setFullText2] = useState('Welcome ! Today world top news..')
const [index2, setIndex2] = useState(0)
const [timetype , settimetype] = useState(1000)


useEffect(() => {
  setTimeout(function(){
    if (index2 < fullText2.length) {
      setTimeout(() => {
        setText2(logotext2 + fullText2[index2])
        setIndex2(index2 + 1)
      }, 10)
    }
    else{
      handleinput()
    }
    settimetype(0)
  },timetype)
}, [index2])

const [logotext3, setText3] = useState("")
const [fullText3, setFullText3] = useState('MadhuSuniL')
const [index3, setIndex3] = useState(0)
const [timetype2 , settimetype2] = useState(2000)


useEffect(() => {
  setTimeout(function(){
    if (index3 < fullText3.length) {
      setTimeout(() => {
        setText3(logotext3 + fullText3[index3])
        setIndex3(index3 + 1)
      }, 80)
    }
    settimetype2(0)
  },timetype2)
}, [index3])


  const domain = 'http://localhost:8000/'
  // const domain = 'https://plutoclarify.pythonanywhere.com/'
  const [copy,setcopy] = useState('Copy')
  const handlecopy = () =>{
  setcopy('Copied!')

  setTimeout(function(){
  setcopy('Copy')
  },5000)
 }

 const [input,setinput] = useState('')

 const handlevalue = event =>{
    setinput(event.target.value)
    // console.log(input);
    setLang(false)

 }




//res state

const [res , setres] = useState([])//{key:'',value:''}






const final_res = res.map(
    obj => {
  return  (<div className='border-[0px] rounded-md text-white font-mono mx-4 mb-20 md:mx-auto p-2 border-white md:w-[70%]'>
  {/* images */}
  <div className='text-md'>
  {obj.img != 'none' ? <img id='img' alt={"?"+obj.head} src={obj.img} className='w-77 m-2 mb-5 rounded-md border-2 border-white mx-auto'/> : <img id='img' src={sorry} className='w-77 m-2 mb-5 rounded-md border-2 border-white mx-auto'/>}
  </div>
  {/* question */}
  <div>
  <h1 id='key' className='font-bold mb-3 text-cyan-400 text-lg'>{obj.head}</h1>
  <hr/>
  </div>
  <br></br>
  {/* value */}
  <div className='text-md'>
    {obj.value == "I am sorry i could't found the result. Please check spellings or try in another way(with new words)." ? <button disabled onClick={()=>{
  handlecopy()
  navigator.clipboard.writeText(obj.cont)
  }} className={ copy == 'Copy' ? 'hidden active:bg-green-500 float-right bg-cyan-400 text-gray-900 p-1 rounded-md border-2 border-cyan-900 font-bold hover:bg-white hover:text-black' : 'active:bg-green-500 float-right mt-10 bg-green-400 text-gray-900 p-1 rounded-md border-2 border-cyan-900 font-bold hover:bg-white hover:text-black'  }>{copy}</button> : <button onClick={()=>{
    handlecopy()
    navigator.clipboard.writeText(obj.cont)
    }} className={ copy == 'Copy' ? 'active:bg-green-500 mx-2 mt-4 text-sm float-right bg-cyan-400 text-gray-100 p-1 rounded-md border-2 border-cyan-900 font-bold hover:bg-white hover:text-black' : 'active:bg-green-500 float-right bg-green-400 text-gray-900 p-1 rounded-md border-2 border-cyan-900 m-4 font-bold hover:bg-white hover:text-black'  }>{copy}</button>}
  <Typing string={obj.cont} speed={0} pipe = {true} late={0} />
  </div>
  <br></br>

  </div>)
    }
  )




  const loading_el = <div className='fixed top-[50%] left-[40%] md:left-[50%] translate-x-[-50%] translate-y-[-50%]'>
  <div className='flex'>
    <img src={logo} className='animate-spin w-36'/><h1 className='animate-pulse mt-[26%] md:mt-[22%] font-mono font-bold text-xl'>Loading...</h1>
  </div>
  </div>








  return (
    <div className='text-white pt-16 md:pt-[6%] pb-20 md:pb-[6%]'>
    {/* logo */}
    <div className='fixed top-[0%] bg-slate-900 w-full flex justify-center items-center'>
    <img src={logo} className={spin == 'logounrotate' ? 'logounrotate w-14 md:w-16 mt-0 md:mt-3' : 'logorotate w-14 md:w-16 mt-0 md:mt-3'}/>
    <h1 className='font-bold text-center mb-1 mr-2 mt-1 md:m-0 md:mt-2 text-2xl md:text-4xl text-white'>{logotext}</h1>
    </div>
    <h1 className='font-bold md:text-lg mx-10 mt-2 rounded-xl p-3 text-center text-gray-400 bg-slate-900'>{logotext2}</h1>

    <div className='bg-black fixed top-[90%] h-44 left-[0%] md:left-[0%] w-[100%] md:w-[100%]'>   
    <center>
    {/*<button className={btndcolor}>Previous</button><button onClick={next} className={btncolor}>Next</button> */}
    </center>
    <h1 className='text-white fixed top-[96%] font-mono text-[13px] left-[31%] md:left-[46.7%] m-1 w-[93%] md:w-[70%]'><b><Typing string={'Powerd by'} speed ={40} pipe = {false} extratext={' '+logotext3} late={3400}/></b></h1>
    </div>

    {loading ? loading_el : final_res}

    </div>
  )
}

export default Word;