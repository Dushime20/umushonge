import React from 'react'

const Details = () => {
  return (
    <div className='flex  p-6 md:mx-10 gap-8'>
        <div className='flex-1'>
             <img src="/image/img3.jpg" alt="image" />
        </div>
        <div className='shadow-md shadow-gray-400  m-4 flex-1 p-6'>
      <p className=''>UMUSHONGE Flour is a nutritious,
         high-quality multigrain flour blend designed to enhance health and wellness while promoting Rwandan agricultural products. It is carefully formulated to provide a balanced mix of essential nutrients,
          making it ideal for families, health-conscious consumers, 
        and those seeking natural, wholesome food options.</p>
         <p className=''>Category:Ibyishimo</p>
         <p className=''>Quantinty: 3 kg</p>
        
         <p>Amount: 6000 Rwf</p>

         <div className='m-3'>
            <button className='bg-yellow-600 text-green-800  rounded-lg p-4'>Add to Card</button>


         </div>
        </div>
       

     
    </div>
  )
}

export default Details