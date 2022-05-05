import React from 'react';
import borabora from '../assets/borabora.jpg';
import borabora2 from '../assets/borabora2.jpg';
import keywest from '../assets/keywest.jpg';
import maldives from '../assets/maldives.jpg';
import maldives2 from '../assets/maldives2.jpg';


const Destinations = () => {
  return (
    <div>

<div className='py-20 flex flex-col justify-center items-center ' >
    <h2 className='py-6 text-5xl' > All-Inclusive Resorts </h2>
    <h4 className='text-xl ' > On the Caribbean's Best Beaches </h4>
</div>
<div className='grid grid-rows-none md:grid-cols-5 py-4 gap-3 md:gap-4 m-4' >

  <img className=' rounded-lg  w-full h-full object-cover col-span-2 md:col-span-3 row-span-2 
  '  src={borabora} alt="" />
  <img className=' rounded-lg  w-full h-full object-cover'  src={borabora2} alt="" />
  <img className=' rounded-lg  w-full h-full object-cover'   src={keywest} alt="" />
  <img className=' rounded-lg  w-full h-full object-cover'  src={maldives} alt="" />
  <img className=' rounded-lg  w-full h-full object-cover'  src={maldives2} alt="" />
 
  </div>



    </div>
  )
}

export default Destinations