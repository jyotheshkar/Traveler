import React from 'react'
import borabora from '../assets/borabora.jpg';
import borabora2 from '../assets/borabora2.jpg';
import keywest from '../assets/keywest.jpg';
import maldives from '../assets/maldives.jpg';
import maldives2 from '../assets/maldives2.jpg';
import maldives3 from '../assets/maldives3.jpg';
import SelectsCard from './SelectsCard';

const Selects = () => {
  return (
    <div className=' gap-3   mx-auto max-w-[1240px] px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 ' >
<SelectsCard bg={borabora}  text={'Maldives'}    />
<SelectsCard bg={borabora2}  text={'Maldives'}    />
<SelectsCard bg={keywest}  text={'maldives'}    />
<SelectsCard bg={maldives}  text={'maldives'}    />
<SelectsCard bg={maldives2}  text={'maldives'}    />
<SelectsCard bg={maldives3}  text={'maldives'}    />



    </div>
  )
}

export default Selects