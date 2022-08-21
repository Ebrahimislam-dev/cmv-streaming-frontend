import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHeart, faArrowLeft, faCirclePlay, faSearch} from '@fortawesome/free-solid-svg-icons'

import image from '../components/assets/3.jpg'

import CatagoryCard from '../components/CatagoryCard'
import CardData from '../components/CardData'


const Catagory = () => {
  return (


    <div className='text-white bg-slate-900'>     
        <div className='grid grid-cols-2 ml-4 pt-4 mb-4 justify-items-stretch'>
            <div className='text-2xl font-thin text-white p-1'>
                <FontAwesomeIcon icon={faArrowLeft}/>  
            </div>
            <div className=' text-white font-thin mr-4 ml-auto text-2xl relative border p-1 px-2 rounded-lg'>
                <FontAwesomeIcon icon={faSearch}/>   
            </div>
        </div>

        <div className='text-center mb-2'>
            <h1>Romantic</h1>
        </div>

        <div className='mx-4'>
                <img className='rounded-lg' src={image.src} alt='' />             
                    <div className='text-xl flex items-center space-x-1 mt-1'>
                        <FontAwesomeIcon icon={faCirclePlay}/> 
                        <h1>Play Now</h1>  
                    </div>                         
        </div>
        <div className='bg-slate-800 mt-6 rounded-t-3xl'>
       
          <CatagoryCard details={CardData} />
        
        </div>    


        



    </div>


  )
}

export default Catagory