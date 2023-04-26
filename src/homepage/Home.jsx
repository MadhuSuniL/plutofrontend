import React, { useEffect, useState } from 'react'
import ExploreCard from './ExploreCard'
import logo from '../images/cl.png'
import moon from '../images/moon.png'
import sun from '../images/sun.png'
import aibot from '../images/aibot.png'
import news from '../images/news.png'
import Typing from '../mainpage/components/Typing'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const nav = useNavigate()

  const [day,setDay] = useState(null)
  const [date,setDate] = useState(null)
  const [timestate,setTime] = useState('00:00')
  const quotes = ['“So many books, so little time.”',
  '“',
  "“We read to know we're not alone.”",
  '“Not all those who wander are lost.”',
  '“Reality continues to ruin my life.”',
  "“He's like a drug for you, Bella.”",
  '“Peace begins with a smile..”',
  "“Don't think or judge, just listen.”",
  '“Whatever you are, be a good one.”',
  '“Where there is love there is life.”',
  '“Get busy living or get busy dying.”',
  '“Never laugh at live dragons.”',
  '“Hearts are made to be broken.”',
  '“I cannot live without books.”',
  '“For you, a thousand times over”',
  '“Not my daughter, you bitch!”',
  '“Happiness is a warm puppy.”',
  '“Turn your wounds into wisdom.”',
  "“Being crazy isn't enough.”",
  '“Resist much, obey little.”',
  '“Angry people are not always wise.”',
  "“Maybe 'okay' will be our 'always”",
  '“What you seek is seeking you.”',
  '“Books are the mirrors of the soul.”',
  "“Unbeing dead isn't being alive.”",
  '“Fear cuts deeper than swords.”',
  '“God has no religion.”',
  '“We live for books.”',
  '“To define is to limit.”',
  '“Laters, baby.”',
  "“Don't Panic.”",
  '“Live to the point of tears.”',
  '“Life is to be enjoyed, not endured”',
  '“I go to seek a Great Perhaps.”',
  '“Hate the sin, love the sinner.”',
  '“And so it goes...”',
  '“Forever is composed of nows.”',
  '“One love, one heart, one destiny.”',
  '“Today a reader, tomorrow a leader.”',
  '“How did it get so late so soon?”',
  '“Even death has a heart.”',
  '“I am a cage, in search of a bird.”',
  '“To say goodbye is to die a little.”',
  '“Dogs never bite me. Just humans.”',
  '“Winter is coming.”',
  '“Love is the absence of judgment.”',
  '“Nitwit! Blubber! Oddment! Tweak!”',
  '“Let our scars fall in love.”',
  '“Give her hell from us, Peeves.”',
  '“Who, being loved, is poor?”',
  '“Reading brings us unknown friends”',
  '“My soul will find yours.”',
  '“I must have loved you a lot.”',
  '“You can make anything by writing.”',
  '“My rapier wit hides my inner pain.”',
  '“Curiouser and curiouser!”',
  '“Your silence will not protect you.”',
  '“The earth laughs in flowers.”',
  '“The only truth is music.”',
  '“Hope is a waking dream.”',
  '“Always be a poet, even in prose.”',
  '“Freedom lies in being bold.”',
  '“All thinking men are atheists.”',
  '“To survive, you must tell stories.”',
  '“No good deed goes unpunished.”',
  '“Man is the cruelest animal.”',
  '“Humor is reason gone mad.”',
  '“I just want to be wonderful.”',
  '“Lord, what fools these mortals be!”',
  '“If you want to be happy, be.”',
  '“People, generally, suck.”',
  '“We live as we dream--alone....”',
  '“Silence is so freaking loud”']


  useEffect(()=>{

      const time = new Date()
      const options = { 
        day: 'numeric', 
        month: 'short', 
        year: 'numeric'
      }
      const date = time.toLocaleDateString('en-IN',options)
      setDate(date)

      const hours = time.getHours()
      const times = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
      setTime(times)
      const day_array = [5,6,7,8,9,10,11,12,13,14,15,16,17,18]
      if (day_array.includes(hours)){
        setDay(sun)
      }
      else{
        setDay(moon)
      }

  },[])
  
  
  
  return (
    <div className='text-white'>
      {/* heding */}
      <div className='flex items-center justify-between px-2 md:px-36'>
      <h1 className='text-2xl font-bold text-center flex items-center justify-center md:justify-start'><img src={logo} className='w-16 mx-0 rounded-full animate-spin'/>PlutoKnows</h1>
      <div className='flex flex-col items-end'>
      {/* <h1 className='text-sm font-bold text-center flex items-center justify-center md:justify-start'>Hyderbad</h1> */}
      <h1 className='text-sm font-bold text-center flex items-center justify-center md:justify-start'>{date}</h1>
      <h1 className='text-xl font-bold text-center flex items-center justify-center md:justify-start'><img src={day} className='w-5 mx-1'/>{timestate}</h1>
      </div>
      </div>


        <div className='grid md:grid-cols-3 gap-3 m-2 mt-0 p-5 pt-0 border-04 border-white'>
            <div className='col-span-2'>
            <center>
            <div onClick={()=>{
              setTimeout(function(){
                return nav('/pluto')
              },600)
            }} className='active:scale-0 hover:scale-0 md:hover:scale-95 duration-1000 cursor-pointer border-2 border-cyan-400 rounded-[50%] w-72 h-72 md:w-96 md:h-96 text-center mt-1 py-10 md:py-20 text-3xl font-bold animate-pulse flex items-center flex-col'><img src={aibot} className='md:w-36 w-20 animate-bounce mt-10 md:mt-1'/><div className='animate-bounce text-[#7fffd4]'>Tap to chat!</div><div className='animate-bounce text-cyan-400 text-sm mt-0'>Questions</div></div>
            </center>
            <h1 className='p-3 text-center text-3xl m-3 font-bold text-cyan-400'>Hai I am Pluto.. </h1>
            <h1 className='text-center text-md font-bold m-3 mx-0 mt-0 text-yellow-400'><i>{quotes[Math.floor(Math.random() * 74)]}</i></h1>

            </div>

<br className='md:hidden' />
            <div className='col-span-1'>
            <h1 className=' text-2xl m-5 font-bold text-cyan-400'>News</h1>
            <div className='grid grid-cols-2  '>
            <h1 onClick={()=> nav('/news/latest')} className='col-span-2 m-0 cursor-pointer my-5 mt-0 p-2 rounded-lg border-t-2 border-cyan-400 shadow-md hover:shadow-lg hover:shadow-cyan-400 hover:scale-105 duration-200 ease-linear shadow-cyan-400 font-extrabold text-lg text-cyan-3000 text-center flex flex-col justify-center items-center'><img src={news} className='w-10 mx-2'/>Today Latest News</h1>
            <ExploreCard path={'/news/business'} name={'Business'}/>
            <ExploreCard path={'/news/entertainment'} name={'Entertainment'}/>
            <ExploreCard path={'/news/technology'} name={'Technology'}/>
            <ExploreCard path={'/news/sports'} name={'Sports'}/>
            <ExploreCard path={'/news/health'} name={'Health'}/>
            <ExploreCard path={'/news/general'} name={'General'}/>
            </div>
            <h1 className='text-cyan-400 text-xl m-2 font-bold my-4'>Text & Grammer</h1>
            <div className='grid grid-cols-2 gap-2 md:gap-7'>
            <ExploreCard name={'Text Summarize'}/>
            <ExploreCard  name={'Text Emotions'}/>
            <ExploreCard  name={'Text Corrections'}/>
            <ExploreCard  name={'Text Versions'}/>
            <ExploreCard  name={'Text Coding-Decoding'}/>
            </div>
            <h1 className='text-cyan-400 text-xl m-2 font-bold'>Local</h1>
            <div className='grid grid-cols-2 gap-2 md:gap-7'>
            <ExploreCard  name={'Temparature By City'}/>
            <ExploreCard  name={'Gold Price By City'}/>
            </div>
            <h1 className='text-cyan-400 text-xl m-2 font-bold'>AI NLP Tools</h1>
            <div className='grid grid-cols-2 gap-2 md:gap-7'>
            <ExploreCard  name={'Fake News Detecting By News'}/>
            <ExploreCard  name={'Face Age&Gender Detection'} />
            <ExploreCard  name={'Text To Voice'} />
            <ExploreCard  name={'Voice To Text'} />
            </div>
            </div>

        </div>




    </div>
  )
}

export default Home