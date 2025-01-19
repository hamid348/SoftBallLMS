import React from 'react'
import ButtonProp from './ButtonProp'
import NomialCard from './NomialCard'
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import NavigateBeforeRoundedIcon from '@mui/icons-material/NavigateBeforeRounded';
import Person from '../img/programs.jpeg'

function Testimonial() {
  return (
    <div className='p-4'>
        <div>
            <ButtonProp 
            val="04."
            text="TestMonial"
            />
        </div>
        <div className='flex flex-col lg:flex-row gap-2  py-4'>
            <div className='flex-1 flex justify-between flex-col '>
                <div>
                    <img src={Person} alt="person" className=' rounded-lg w-1/2' />
                </div>
                <div>
                    <h1 className='text-4xl'>
                    
                    From Our BaseBall Community

                    </h1>
                    <div>
                    < NavigateBeforeRoundedIcon/>
                    <NavigateNextRoundedIcon className="bg-black text-white rounded-full" />
                    </div>
                </div>
            </div>
            <div className='flex-1'>
            <NomialCard
            title="Hamid"
            icon= {Person}
            desc="The coaching here transformed my game. I'm more confident at the plate!"
            person={Person}
            name="Mudasir"
            address={`Lesch-Jakubowski ${<br/>} 577 Glover Lights, Reichertland, British Indian`}

            />
            </div>
            <div className='flex-1'>

            
           
            <NomialCard
            title="Hamid"
            icon= {Person}
            desc="The coaching here transformed my game. I'm more confident at the plate!"
            person={Person}
            name="Mudasir"
            address={`Lesch-Jakubowski ${<br/>} 577 Glover Lights, Reichertland, British Indian`}

            />
            </div>
        </div>
    </div>
  )
}

export default Testimonial