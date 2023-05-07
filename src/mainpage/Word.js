import React from 'react'
import send from '../images/sentt.png'
import logo from '../images/aibot.png'
import lang1 from '../images/lang.png'
import sorry from '../images/sorry.gif'
import { useState , useEffect } from 'react';
import Typing from "./components/Typing";
import Navbar from '../Navbar'


const Word = () => {

  const [spin, setspin] = useState('logounrotate')
  const [lang, setLang] = useState(false)
  const [langValue, setLangValue] = useState('en')
  const [ln,setLn] = useState('en n')  
  const [placeholder_state,setPlaceholder] = useState('   Search.... "United States"')
  const [inputStyle,setInputStyle] = useState('fixed pr-20 top-[90%] left-[2%] md:left-[15%] w-[93%] md:w-[70%] rounded-xl h-10 text-xl mx-1 pl-2 bg-slate-900 text-gray-500 border-2 border-white')
  // typing logo 
  const [logotext, setText] = useState("")
const [fullText, setFullText] = useState('PlutoKnows')
const [index, setIndex] = useState(0)


useEffect(()=>{
  setTimeout(function(){
    document.getElementById('input').focus()
  },4000)
},[])


useEffect(() => {
  if (index < fullText.length) {
    setTimeout(() => {
      setText(logotext + fullText[index])
      setIndex(index + 1)
    }, 30)
  }
}, [index])


const [logotext2, setText2] = useState("")
const [fullText2, setFullText2] = useState('Welcome ! My intelligent system can provide you with information on any single word , noun or sentence. Simply enter the word you want to know more about')
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
    settimetype(0)
  },timetype)
}, [index2])

const [logotext3, setText3] = useState("")
const [fullText3, setFullText3] = useState('MadhuSuniL')
const [index3, setIndex3] = useState(0)
const [timetype2 , settimetype2] = useState(4000)


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

 const handlepaste = item =>{
  document.getElementById('input').value=item
  setinput(item)
}



//  res state

const [res , setres] = useState([])//{key:'',value:''}

const handleinput = () => {
  setLang(false)
  setspin('logorotate')
  var q = document.getElementById('input').value
        document.getElementById('input').value = ''
        setPlaceholder('Searching for... "'+input+'"')
        document.getElementById('input').disabled = true
        setInputStyle('animate-pulse fixed pr-20 top-[90%] left-[2%] md:left-[15%] w-[93%] md:w-[70%] rounded-xl h-10 text-xl mx-1 pl-2 bg-slate-900 text-gray-500 border-2 border-white')

  fetch(`${domain}get_res`,{
    method:'POST',
    headers:{
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body:JSON.stringify({
      key:input,
      lang:langValue
    })
  })
  .then(res => res.json())
  .then(data => {
    res.push(data)
    setspin('logounrotate')
    document.getElementById('input').value = ''
    document.getElementById('input').disabled = false
    // document.getElementById('input').focus()

        setInputStyle('fixed pr-20 top-[90%] left-[2%] md:left-[15%] w-[93%] md:w-[70%] rounded-xl h-10 text-xl mx-1 pl-2 bg-slate-900 text-gray-500 border-2 border-white')
        setPlaceholder('Search more..')
    if(document.querySelectorAll('#img').length != 1){
      const element = document.querySelectorAll('#img')[document.querySelectorAll('#img').length - 1]
      element.scrollIntoView(true)
    }
  })
  
}


useEffect(() => {
  const listener = (event) => {
    if (event.code === "Enter") {
        setLang(false)
        var q = document.getElementById('input').value
        document.getElementById('input').value = ''
        setPlaceholder('Searching for... "'+q+'"')
        document.getElementById('input').disabled = true
        setInputStyle('animate-pulse fixed pr-20 top-[90%] left-[2%] md:left-[15%] w-[93%] md:w-[70%] rounded-xl h-10 text-xl mx-1 pl-2 bg-slate-900 text-gray-500 border-2 border-white')
        setspin('logorotate')
        
        fetch(`${domain}get_res`,{
        method:'POST',
        headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        },
        body:JSON.stringify({
        lang:langValue,
        key:q
    })
  })
      .then(res => res.json())
      .then(data => {
        res.push(data)
        setspin('logounrotate')
        document.getElementById('input').value = ''
        document.getElementById('input').disabled = false
        setInputStyle('fixed pr-20 top-[90%] left-[2%] md:left-[15%] w-[93%] md:w-[70%] rounded-xl h-10 text-xl mx-1 pl-2 bg-slate-900 text-gray-500 border-2 border-white')
        // document.getElementById('input').focus()

        setPlaceholder('Search more..')
        if(document.querySelectorAll('#img').length != 1){
          const element = document.querySelectorAll('#img')[document.querySelectorAll('#img').length - 1]
          element.scrollIntoView(true)
        }
  })
  
      }
      else{

      }
  };
  document.addEventListener("keypress", listener);
}, []);


// typing value
const final_res = res.map(
    obj => {
  return  (<div key={obj.key} className='border-[0px] rounded-md text-white font-mono mx-2 mb-20 md:mx-auto p-2 border-white md:w-[70%]'>
  {/* images */}
  <div className='text-md'>
  {obj.img != 'none' ? <img id='img' alt={"?"+obj.key} src={obj.img} className='w-77 m-2 mb-5 rounded-md border-2 border-white mx-auto'/> : <img id='img' src={sorry} className='w-77 m-2 mb-5 rounded-md border-2 border-white mx-auto'/>}
  </div>
  {/* question */}
  <div>
  <h1 id='key' className='font-bold mb-3 text-green-600 text-lg'>{obj.key}</h1>
  <hr className='font-bold'/>
  </div>
  <br></br>
  {/* value */}
  <div className='text-md'>
    {obj.value == "I am sorry i could't found the result. Please check spellings or try in another way(with new words)." ? <button disabled onClick={()=>{
  handlecopy()
  navigator.clipboard.writeText(obj.value)
  }} className={ copy == 'Copy' ? 'hidden active:bg-green-500 float-right bg-cyan-400 text-gray-900 p-1 rounded-md border-2 border-cyan-900 font-bold hover:bg-white hover:text-black' : 'active:bg-green-500 float-right mt-10 bg-green-400 text-gray-900 p-1 rounded-md border-2 border-cyan-900 font-bold hover:bg-white hover:text-black'  }>{copy}</button> : <button onClick={()=>{
    handlecopy()
    navigator.clipboard.writeText(obj.value)
    }} className={ copy == 'Copy' ? 'active:bg-green-500 mx-2 mt-4 text-sm float-right bg-cyan-400 text-gray-100 p-1 rounded-md border-2 border-cyan-900 font-bold hover:bg-white hover:text-black' : 'active:bg-green-500 float-right bg-green-400 text-gray-900 p-1 rounded-md border-2 border-cyan-900 m-4 font-bold hover:bg-white hover:text-black'  }>{copy}</button>}
  <br></br>
  <br></br>
  <br></br>
  <div className='grid grid-cols-12'>
    
  <img src={logo} className='w-20 md:w-16 col-span-2 md:col-span-1 ml-[-13%] md:ml-[13%]'/>
    
  <div className='col-span-10 md:col-span-11'>
  <Typing string={obj.value} speed={0} pipe = {false} late={0} />
  </div>
  </div>
  </div>
  <br></br>

  {/* extra */}
  {(obj.extra != null && obj.extra.length > 1) ? <div className='text-md text-cyan-400'>
  {/* {obj.extra} */}
  <h1 className='mb-5 mt-0 text-lg font-bold'>You may search about these lines also...<br></br></h1>
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



  //lang button

    const [btndcolor ,setBtnDcolor] = useState('bg-slate-900 mt-5 border-white border-0 p-1 px-3 rounded-md')
    const [btncolor ,setBtncolor] = useState('bg-cyan-500 border-white border-2 p-1 px-3 rounded-md')
    const [clkbtn,setClkBtn] = useState(true)    
    const [clkbtn2,setClkBtn2] = useState(false)  
    

  // useEffect(()=>{

  //   if(clkbtn === true){
  //     setLn(document.getElementById('langbtn').getAttribute('name'))
  //   }
  //   else{
  //     setLn(document.getElementById('langbtn2').getAttribute('name'))
  //   }


  // },[])



  function btn1(){
      setClkBtn(true)
      setClkBtn2(false)
      setLn(document.getElementById('langbtn').getAttribute('name'))
  }

  function btn2(){
      setClkBtn2(true)
      setClkBtn(false)
      setLn(document.getElementById('langbtn2').getAttribute('name'))
  }




  function show_lang(){
    if (langValue === 'en'){
      return 'English'
    }
    else if (langValue === 'te'){
      return 'తెలుగు'
    }
    else if (langValue === 'ta'){
      return 'தமிழ்'
    }
    else if (langValue === 'hi'){
      return 'हिंदी'
    }
    else{
      return 'ಕನ್ನಡ'
    }
  }
  



  return (
    <div className='text-white pt-16 md:pt-[6%] pb-20 md:pb-[6%]'>
    {/* logo */}
    <div className='fixed top-[0%] bg-slate-900 w-full flex justify-center items-center'>
    <img src={logo} className={spin == 'logounrotate' ? 'logounrotate w-10 md:w-16 m-2 md:mt-3 rounded-[50%]' : 'logorotate w-10 md:w-16 m-2 md:mt-3 rounded-full'}/>
    <h1 className='font-bold text-center mb-1 mr-2 mt-1 md:m-0 md:mt-2 text-2xl md:text-4xl text-white'>{logotext}</h1>
    </div>
    {/* <div className='grid md:grid-cols-2 p-3'> */}
    <h1 className='font-bold md:text-lg mx-10 mt-2 rounded-xl p-3 text-center text-gray-400 bg-slate-900'>{logotext2}</h1>
    {/* <h1 className='font-bold md:text-lg mx-10 mt-2 text-center rounded-xl p-3 text-gray-400 bg-slate-900'>Ask any question related to python.</h1> */}
    {/* </div> */}
    {/* typing */}
    <div className='bg-black fixed top-[90%] h-44 left-[0%] md:left-[0%] w-[100%] md:w-[100%]'>   
        <input onClick={()=>setLang(false)} onChange={handlevalue} placeholder={placeholder_state} id='input' className={inputStyle} type="text"/><button onClick={handleinput}> <img src={send} className='w-7 m-1 ml-2 md:w-7 fixed top-[90.5%] left-[83%]  md:top-[90.5%] md:left-[82%]'/> </button>
        <h1 className='text-white fixed top-[96%] font-mono text-[13px] left-[31%] md:left-[46.7%] m-1 w-[93%] md:w-[70%]'><b><Typing string={'Powerd by'} speed ={40} pipe = {false} extratext={' '+logotext3} late={6000}/></b></h1>
    </div>

    <div className={lang ? 'fixed top-[50%] left-[50%] w-[94%] md:w-[23%] ease-in-out duration-700 translate-x-[-50%] translate-y-[-50%] shadow-inner shadow-slate-500 rounded-lg p-3 md:p-5 bg-slate-900' : 'fixed w-[94%] md:w-[23%] left-[120%] top-[87%] ease-in-out duration-700'}>
    <h1 className='m-3 text-xl font-bold text-center text-gray-500 mb-5'>Settings</h1>
    <label htmlFor='lang' className='m-2 font-bold'>Response Language</label>
    <select id='lang' className='rounded-xl h-10 text-xl mx-1 pl-2 bg-slate-900 text-gray-500 border-2 border-white' onChange={(e)=> {
      setLangValue(e.target.value)
      // alert(langValue)
    }}>
        <option value='en'>English</option>
        <option value='te'>తెలుగు</option>
        <option value='hi'>हिंदी</option>
        <option value='ta'>தமிழ்</option>
        <option value='kn'>ಕನ್ನಡ</option>
    </select><br></br>
    <center>
    {/* <button id='langbtn' name={langValue+' n'} onClick={btn1}  className={clkbtn ? btncolor : btndcolor}>{WriteLangNameInDef()}</button>     */}
    {/* <button id='langbtn2' name={langValue+' p'} onClick={btn2} className={clkbtn2 ? btncolor : btndcolor}>{WriteLangNameInEng()}</button>     */}
    </center>
    </div>
    {/* <Navbar/> */}
    {!lang ? <span className='flex flex-col cursor-pointer fixed top-[82.4%] active:animate-spin animate-bounce md:top-[80%] rounded-full border-0 border-gray-100 left-[84.7%] md:left-[82.6%]'><img onClick={()=>setLang(!lang)} src={lang1} className='w-10 md:w-10 rounded-full'/><h1 className='text-center'>{show_lang()}</h1></span> : <h1 onClick={()=>setLang(!lang)} className='w-10 md:w-12 fixed top-[82.4%] animate-pulse md:top-[80%] active:animate-spin text-2xl font-bold left-[88.7%] cursor-pointer md:left-[83.2%]'>X</h1>}

    
    {final_res}
    </div>
  )
}

export default Word;