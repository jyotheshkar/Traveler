import React, { useState } from 'react'
import {BsPerson} from 'react-icons/bs';
import {BiSearch} from 'react-icons/bi';
import {AiOutlineClose} from 'react-icons/ai';
import {AiOutlineMenu} from 'react-icons/ai' ;
import {FaFacebook,FaInstagram,FaTwitter,FaPinterest,FaYoutube} from 'react-icons/fa'



const Navbar = () => {
const [ Nav , setNav] = useState(false);
const [ Logo , setLogo ] = useState(false);
const Ultra = () => {
  setNav( !Nav )
  setLogo( !Logo )
}


  return (
    <div className='flex w-full justify-between items-center  h-20 px-4 absolute z-10 text-white  ' >
<h1> BEACHES. </h1>
<ul className='hidden md:flex '  >
  <li>Home </li>
  <li>Destinations </li>
  <li> Travel </li>
  <li>View</li>
  <li>Book </li>
</ul>
<div className='flex gap-4 hidden md:flex ' >
< BiSearch size={20}   />
< BsPerson  size={20}  />
</div>
<div onClick={Ultra} className='md:hidden z-10  ' >
{ Nav ? <AiOutlineClose className='text-black' size={20} /> : <AiOutlineMenu  size={20}  /> }

</div>

<div onClick={Ultra} className={ Nav ? 'absolute left-0 top-0 bg-gray-100/90 w-full px-4 py-7 flex flex-col ' : 'absolute left-[-100%] top-0 bg-gray-100/90 w-full px-4 py-7 flex flex-col ' }   >
<div className='text-black' >
<h1 onClick={Ultra} className={Logo ? 'block' : 'hidden' } > BEACHES. </h1>
</div>


<ul className='text-black text-xl ' >
  <li className='border-b-2  border-gray-400  py-2 '  >Home </li>
  <li className='border-b-2  border-gray-400   py-2 '  >Destinations </li>
  <li className='border-b-2 border-gray-400    py-2 '  > Travel </li>
  <li className='border-b-2 border-gray-400    py-2 '  >View</li>
  <li className='border-b-2  border-gray-400   py-2 '  >Book </li>
  <div className='flex flex-col  ' > 
   <button className='my-6' > Search</button>
   <button> Account </button>
   
     </div>
     <div  className='flex justify-between py-8 ' >
       < FaFacebook   className='icon' />
       < FaInstagram  className='icon'  />
       < FaTwitter  className='icon'  />
       <FaPinterest   className='icon' />
       < FaYoutube   className='icon'  />
     </div>
</ul>



</div>




    </div>
  )
}

export default Navbar