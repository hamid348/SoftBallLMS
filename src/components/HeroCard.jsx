import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
// import Stack from '@mui/material/Stack';
// import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball';
import SearchIcon from '@mui/icons-material/Search';
import CallMadeIcon from '@mui/icons-material/CallMade';


import React from "react";
import heroImage from '../img/hero.jpeg'
import heroImage1 from '../img/1.jpg'
import heroImage2 from '../img/2.jpg'
import heroImage3 from '../img/3.jpg'
import LinkButton from './LinkButton';
import RightLinkButton from './RightLinkButton';
import MouseIcon from '@mui/icons-material/Mouse';

function HeroCard() {
  return (
    <div 
    class="lg:h-screen flex flex-col justify-around bg-cover bg-center m-2 rounded-xl p-8 relative" 
    style={{ backgroundImage: `url(${heroImage})`  }}>
        <div class="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>

        <div className='flex flex-1 z-10  justify-between'>
            <div>
            {/* <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"><span className='pr-2 '><SportsVolleyballIcon/></span><span className='hidden sm:inline-block'> Slugger. </span></button> */}

              <LinkButton/>
            </div>
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
            <div className="rounded-full  p-2 bg-white">
              <SearchIcon className="text-black" />
            </div>
          </li>
        </ul>
            </div>
            <div>
            <div>
            {/* <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"><span className='hidden sm:inline-block'> Slugger. </span> <span className='pl-2 '><SportsVolleyballIcon/></span></button> */}
            <RightLinkButton/>
            </div>
            </div>
        </div>
        

        <div className='flex flex-col flex-1 z-10  gap-2 py-3 max-w-sm justify-start '>
            <div className='flex items-start bg-white w-fit p-2 rounded-full bg-opacity-55'><AvatarGroup spacing="small">
        <Avatar alt="Remy Sharp" src={heroImage1} />
        <Avatar alt="Remy Sharp" src={heroImage2} />
        <Avatar alt="Remy Sharp" src={heroImage3} />
       
      </AvatarGroup></div>
            <div className='text-white text-justify'>
            Join a growing community of baseball enthusiasts who've sharpened their skills and boosted their confidence with our expert-led training. Be part of the success stories!
            </div>
        </div>

        
        <div className='flex-1 z-10 max-w-sm lg:max-w-md'>
        <p className='font-sans text-2xl text-white lg:text-6xl'>

            Join a Passionate Community of Softball Enthusiasts!
            <span className='bg-black rounded-full p-3 text-white text-sm ml-2 lg:text-xl '> Join Us
                <CallMadeIcon className="text-black bg-white rounded-lg ml-2 w-32"  />
            </span>

        </p>
            
        </div>

<div className='flex gap-2 absolute right-0 bottom-0 m-3 text-white'>
  <p>
    Scroll Down
  </p>
  <MouseIcon/>

</div>
    </div>
  )
}

export default HeroCard