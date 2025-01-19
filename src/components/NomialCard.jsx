import React from 'react'
// import imgg from '../img/match.jpeg'
import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded';

function NomialCard(props) {
  return (
    <div>
        <div className='max-w-sm bg-slate-400 rounded-lg p-4'>
            <div className='flex justify-between items-center'>
                <div className='flex gap-2 border border-gray-900 px-2 rounded-lg py-1'>
                    <img src={props.icon} alt=""  className='rounded-full w-6'/>
                    <p>{props.title}</p>
                </div>

                <div className=''>
                    <img src={props.person} alt="" className=' w-48 h-48 rounded-full p-4'/>
                </div>
            </div>
            <div>
                <FormatQuoteRoundedIcon className='text-yellow-300'/>

            </div>

            <div>
                <p className='text-3xl py-4 '>
                {props.desc}
                </p>
            </div>

            <div className='py-4'>
                <h1>{props.name}</h1>
                <p className='text-gray-300'>{props.address}</p>
            </div>

        </div>

    </div>
  )
}

export default NomialCard