import React from 'react'
import Image from 'next/image'
import { intract_background, intract_animated } from '@/assets'

export default function Hero() {
  return (
    <div 
        className="hero h-[90vh] mt-1 w-full flex justify-start items-start  bg-cover bg-center bg-no-repeat"   
    >
        <div className='w-[65%] mx-auto mt-56 flex flex-col gap-10 justify-center items-center'>
            <Image src={intract_animated} alt="intract" height={100} />
            <div className='text-[#CECED1] text-center text-xl leading-6'>
                <p>Intract users <span className='text-[#646268]'>have together made more than</span> $100 million <span className='text-[#646268]'>in web3.</span></p>
                <p><span className='text-[#646268]'>Join them</span> and learn how to earn crypto!</p>
            </div>
            <button className='bg-[#7140EA] text-white px-14 py-2 rounded-md opacity-75'>Get started	&#x2192;</button>
        </div>
    </div>
  )
}
