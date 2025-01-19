import React from 'react'
import footerlogo from '../img/footerlogo.png'

function FooterLogo() {
  return (
    <div className='bg-white text-black flex gap-2 p-2 w-fit rounded-full  items-center'>
        <div className='w-18 bg-yellow-300 rounded-full p-2'>
            <img src={footerlogo} alt="" className='' width={42}/>
        </div>
        <h1 className='text-2xl font-semibold'>Slugger.</h1>

    </div>
  )
}

export default FooterLogo