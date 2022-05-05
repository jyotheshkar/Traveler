import React from 'react'

const SelectsCard = (props) => {
  return (
    <div>
<div className='relative' >  
<img  className='w-full h-full object-cover' src={props.bg} alt="/" />
<div className='bg-gray-900/30  absolute top-0 left-0 w-full h-full ' >
    <p className=' pl-5 pt-[200px] text-white font-semibold text-2xl absolute ' > {props.text} </p>

</div>
</div>

</div>
    
  )
}

export default SelectsCard