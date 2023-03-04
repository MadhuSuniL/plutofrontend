import React from 'react'
import send from './send.png'
import logo from './cl.png'
import sorry from './sorry.gif'
import { useState , useEffect } from 'react';
// import SyntaxHighlighter from 'react-syntax-highlighter';
// import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
// import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
// import prism from 'react-syntax-highlighter/dist/esm/styles/prism/prism';


const Word = () => {

  const [spin, setspin] = useState('logounrotate')


  // const domain = 'http://localhost:8000/'
  const domain = 'https://plutoclarify.pythonanywhere.com/'
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
 }

 const handlepaste = item =>{
  document.getElementById('input').value=item
  setinput(item)
}



//  res state

const [res , setres] = useState([])


const handleinput = () => {
  setspin('logorotate')
  fetch(`${domain}get_res`,{
    method:'POST',
    headers:{
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body:JSON.stringify({
      key:input
    })
  })
  .then(res => res.json())
  .then(data => {
    res.push(data)
    setspin('logounrotate')
    document.getElementById('input').value = ''
    if(document.querySelectorAll('#img').length != 1){
      const element = document.querySelectorAll('#img')[document.querySelectorAll('#img').length - 1]
      element.scrollIntoView(true)
    }

  })
  
}

const final_res = res.map(
    obj => {
  return  (<div className='border-[0px] rounded-md text-white font-mono mx-4 mb-20 md:mx-auto p-5 border-white md:w-[70%]'>
  {/* images */}
  <div className='text-md'>
  {obj.img != 'none' ? <img id='img' src={obj.img} className='w-77 m-2 mb-5 rounded-md border-2 border-white mx-auto'/> : <img id='img' src={sorry} className='w-77 m-2 mb-5 rounded-md border-2 border-white mx-auto'/>}
  </div>
  {/* question */}
  <div>
  <h1 id='key' className='font-bold mb-3 text-green-600 text-lg'>{obj.key}</h1>
  <hr/>
  </div>
  <br></br>
  {/* value */}
  <div className='text-md'>
    {obj.value == "I am sorry i could't found the result. Please check spellings or try in another way(with new words)." ? <button disabled onClick={()=>{
  handlecopy()
  navigator.clipboard.writeText(obj.value)
  }} className={ copy == 'Copy' ? 'hidden active:bg-green-500 float-right bg-cyan-400 text-gray-900 p-1 rounded-md border-2 border-cyan-900 font-bold hover:bg-white hover:text-black' : 'active:bg-green-500 float-right bg-green-400 text-gray-900 p-1 rounded-md border-2 border-cyan-900 font-bold hover:bg-white hover:text-black'  }>{copy}</button> : <button onClick={()=>{
    handlecopy()
    navigator.clipboard.writeText(obj.value)
    }} className={ copy == 'Copy' ? 'active:bg-green-500 mx-2 text-sm float-right bg-cyan-400 text-gray-100 p-1 rounded-md border-2 border-cyan-900 font-bold hover:bg-white hover:text-black' : 'active:bg-green-500 float-right bg-green-400 text-gray-900 p-1 rounded-md border-2 border-cyan-900 font-bold hover:bg-white hover:text-black'  }>{copy}</button>}
  {/* {setFullText(obj.value)} */}
  <p className='text-justify'>{ obj.value }</p>
  </div>
  <br></br>

  {/* extra */}
  {obj.extra != null ? <div className='text-md text-cyan-400'>
  {/* {obj.extra} */}
  <h1 className='mb-5 mt-0 text-lg font-bold'>You can search about these lines also...<br></br></h1>
  {obj.extra.map(item =>{
    return(
      <h1 id='content' onClick={()=>{
        handlepaste(item)        
      }} className='bg-slate-900 cursor-pointer shadow-xl rounded-md shadow-cyan-400 active:shadow-black text-gray-200 text-center my-2 p-2'>{item}</h1>
    )
  })      
  }
  
  </div> : <h1>Please type any other words...!</h1>}



  </div>)
    }
  )




  return (
    <div className='text-white pt-16 md:pt-[6%] pb-20 md:pb-[6%]'>
    {/* logo */}
    <div className='fixed top-[0%] bg-slate-900 w-full flex justify-center items-center'>
    <img src={logo} className={spin == 'logounrotate' ? 'logounrotate w-14 md:w-16 mt-0 md:mt-3' : 'logorotate w-14 md:w-16 mt-0 md:mt-3'}/>
    <h1 className='font-bold text-center mb-1 mr-2 mt-1 md:m-0 md:mt-2 text-2xl md:text-4xl text-white'>PlutoClarify</h1>
    </div>
    {/* <div className='grid md:grid-cols-2 p-3'> */}
    <h1 className='font-bold md:text-lg mx-10 mt-2 rounded-xl p-3 text-center text-gray-400 bg-slate-900'>Type any single word or nouns and know information</h1>
    {/* <h1 className='font-bold md:text-lg mx-10 mt-2 text-center rounded-xl p-3 text-gray-400 bg-slate-900'>Ask any question related to python.</h1> */}
    {/* </div> */}
    {/* typing */}
    <div className='bg-black fixed top-[90%] h-44 left-[0%] md:left-[0%] w-[100%] md:w-[100%]'>   
        <input onChange={handlevalue} id='input' className='fixed pr-20 top-[90%] left-[2%] md:left-[15%] w-[93%] md:w-[70%] rounded-xl h-10 text-xl mx-1 pl-2 bg-slate-900 text-gray-500 border-2 border-white' type="text"/><button onClick={handleinput}> <img src={send} className='w-10 fixed top-[90.5%] left-[83%]  md:top-[90.5%] md:left-[82%]'/> </button>
        <h1 className='text-white fixed top-[96%] font-mono text-[13px] left-[31%] md:left-[46.7%] m-1 w-[93%] md:w-[70%]'>Powerd by <b className='text-cyan-600 text-md'>MadhuSunil</b></h1>
    </div>

    {final_res}
    </div>
  )
}

export default Word;
