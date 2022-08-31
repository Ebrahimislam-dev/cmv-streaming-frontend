import UpcomingCard from '../components/UpcomingCard'
import CardData2 from '../components/CardData2' 
import React,{useState}  from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

const upcoming = () => {
  return (
    <div className='bg-slate-900 font-body text-white'>
        <div className='text-xl text-white ml-4 pt-8'>
        <Link href='home' >
                   <FontAwesomeIcon icon={faArrowLeft}/>
                </Link>
        </div>
        <div className='flex justify-center space-x-2 py-8'>
            <button className='border-cyan-400 border-2 py-2 px-4 rounded-2xl'>Coming Soon</button>
            <button className='hover:bg-cyan-400 py-2 px-7 rounded-2xl'>Exclusive</button>

        </div>
        
        <UpcomingCard details={CardData2}/>
    </div>
  )
}

export default upcoming