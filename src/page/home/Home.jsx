import React from 'react'
import Landingpage from './Landingpage'
import Feature from './Feature'
import Computers from './computer'
import Accessories from './Accessoir'



const Home = () => {
  return (
    <div className='overflow-hidden '>
       <div>
         <Landingpage/>
         </div>
        <div className=''>
        <Feature/>
        </div>
       <div>
       <Computers/>
       </div>
       <Accessories/>
        
    </div>
  )
}

export default Home