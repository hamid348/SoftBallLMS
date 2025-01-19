import React from 'react'
import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball'
// import { SportsVolleyballRounded } from '@mui/icons-material'
import BaseBall from '../img/baseball.jpg'
import BaseLogo from '../img/BaseLogo.png'
import FooterLogo from './FooterLogo'

function FooterSection() {
  return (
    <div className='bg-black py-8 rounded-b-lg min-h-screen flex flex-col justify-around'>
        <hr class="h-1 my-8 w-4/5 bg-slate-300  ml-auto mr-auto"></hr>
        <div className='flex  justify-around mx-32 my-32 '>
            <div className='text-white flex flex-col h-full justify-between flex-1'>
                <div>

                    <FooterLogo/>

                </div>
                <div className=' '>
                    <p className='text-4xl'>

                We're dedicated to empowering baseball players of all skill levels.
                    </p>
                </div>
            </div>
            

            <div className='flex-1 justify-center items-end '>

            <div className='relative flex   '>
                <img src={BaseBall} alt="" className='w-48 '/>
                <img src={BaseLogo} alt="" className='w-48 '/>
            </div>
            </div>
            
        </div>

        <hr class="h-1 my-8 w-4/5 bg-slate-300  ml-auto mr-auto"></hr>

        <div className='flex justify-between text-gray-400 text-2xl w-4/5 ml-auto mr-auto'>
            <div>
                123BaseballLane,SportsCity,USA
            </div>
            <div>
                +1(555)123-4567
            </div>
            <div>
                info@sluggeracademy.com
            </div>
        </div>

     <div className='flex ml-auto mr-auto w-full justify-around'>
        <p className='text-white'>@2025 Slugger All Rights Reserved</p>
        <div>
            <ul className="flex gap-2 flex-col space-y-4 md:space-y-0 md:flex-row md:justify-around">
          {/* Navigation Buttons */}
          {["Home", "Programs", "Coaches", "Schedule"].map((item, index) => (
            <li key={index} className="text-center md:text-left">
              <button
                type="button"
                className="w-full md:w-auto text-white border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                {item}
              </button>
            </li>
          ))}
          {/* Icon Button */}
          <li className="flex justify-center md:justify-start">
            <div className="rounded-full w-fit p-2 bg-yellow-600">
              <SportsVolleyballIcon className="text-white" />
            </div>
          </li>
        </ul>
            </div>
     </div>

    </div>
  )
}

export default FooterSection