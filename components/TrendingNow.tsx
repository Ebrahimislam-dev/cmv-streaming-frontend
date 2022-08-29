import React from 'react'
import CardData from './CardData'
import CardTest from './CardTest'

const TrendingNow = () => {
  
  return (
    <div className='pt-3'>
    <div className='flex justify-between items-center ml-4 whitespace-nowrap mt-4'>
        <h1 className='text-xl font-bold text-white cursor-pointer'>Trending Now</h1>
        <button>
            <p className=' text-white font-thin mr-4'>View all</p>
            </button>
    </div>
    <div className='mt-4'>
     <CardTest details={CardData}/> 
    </div>
</div>
  )
}

export default TrendingNow