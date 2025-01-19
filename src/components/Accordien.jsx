import React from 'react'
import acc from '../img/match.jpeg'
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import CallMadeRoundedIcon from '@mui/icons-material/CallMadeRounded';

function Accordien() {
  return (
    <div className=''>
        <hr />
        <div className='flex gap-2 py-4'>
            <div>01</div>
            <div className='flex flex-col gap-4'>
                <h1 className='text-2xl'>
                    Home Run Derby
                </h1>
                <p>
                This event is all about powerhitting, where players sim to fit the most home runs and claim the supgercrown
                </p>
                <button
                type="button"
                className="w-full md:w-auto font-bold border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                View Details
              </button>


            </div>
            <div className='pt-4'><img src={acc} alt="" className='rounded-lg'/></div>
        </div>
        <hr />
        <div className='flex justify-between py-4'>
            <div className='flex gap-2'>
                <p>02.</p>
                <h1 className='text-2xl'>Diamond ShowDown</h1>
            </div>
            <div>
                <NavigateNextRoundedIcon className='bg-slate-200 rounded-full'/>
            </div>
        </div>
        <hr />
        <div className='flex justify-between py-4'>
            <div className='flex gap-2'>
                <p>03.</p>
                <h1 className='text-2xl'>FastPitch Frenzy</h1>
            </div>
            <div>
                <NavigateNextRoundedIcon className='bg-slate-200 rounded-full'/>
            </div>
        </div>
        <hr />
        <div className='flex justify-between py-4'>
            <div className='flex gap-2'>
                <p>04.</p>
                <h1 className='text-2xl'>All-Star Weekend</h1>
            </div>
            <div>
                <NavigateNextRoundedIcon className='bg-slate-200 rounded-full'/>
            </div>
        </div>
        <hr />
        
        <div className='flex justify-end pt-4'>
            <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"><span className='hidden sm:inline-block'> Join Us </span><span className='pr-2 '><CallMadeRoundedIcon className=''/></span></button>

            </div>
        
    </div>
  )
}

export default Accordien