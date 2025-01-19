import React from 'react'
import ButtonProp from './ButtonProp'
import Match from '../img/match.jpeg'
import Accordien from './Accordien'

function Schedule() {
  return (
    <div className='p-4'>
        <div>
            <ButtonProp val="03" text="Schedule" />
        </div>
        <div className='lg:flex lg:gap-2 lg:justify-around'>
            <div className='flex flex-col  flex-1 gap-3 p-4 max-w-sm'>
                <h1 className='text-4xl'>
               <span className='text-yellow-400'>Game On:</span>  <br /> Upcoming Match Schedule
                </h1>
                <p className=' text-left'>
                Don't miss a single inning! Check out our upcoming matches to stay updated on game times, locations,andopponents.
                </p>
                <img src={Match} alt="" className='rounded-lg ' />
            </div>
            <div className='flex-1 max-w-sm'>
                <Accordien/>
            </div>
        </div>
    </div>
  )
}

export default Schedule