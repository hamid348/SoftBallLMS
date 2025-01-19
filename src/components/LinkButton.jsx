import React from 'react'
import CallMadeIcon from '@mui/icons-material/CallMade';


function LinkButton() {
  return (
    <div className='bg-white text-black flex gap-2 p-1 w-fit rounded-full  items-center'>
    <div className=' bg-yellow-300 rounded-full p-1'>
        <CallMadeIcon />
    </div>
    <h1 className='text-xl font-semibold'>Slugger.</h1>

</div>
  )
}

export default LinkButton





