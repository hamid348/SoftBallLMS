import React from 'react'
import CallMadeIcon from '@mui/icons-material/CallMade';

function RightLinkButton() {
  return (
    <div className='bg-white text-black flex gap-2 p-1 w-fit rounded-full  items-center'>
    <h1 className='text-xl font-semibold'>Free Trial</h1>
    <div className=' bg-black rounded-full p-1 text-white'>
        <CallMadeIcon />
    </div>

</div>
  )
}

export default RightLinkButton