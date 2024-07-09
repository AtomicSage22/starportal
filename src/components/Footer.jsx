import { interact_text } from '@/assets'
import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <div className='w-full border-t-2 '>
      <div>
        <div className='grid grid-cols-[2fr,1fr,1fr,1fr,1fr] text-[#525252]'>
          <div>
            <Image src={interact_text} alt="logo"  />
            <p>We are your personal guide for exploring web3 projects & earning 100x rewards</p>
          </div>
          <div>
            <h3>Intract</h3>
            <p></p>
          </div>
          <div></div>
          <div></div>
          <div></div>
          
        </div>
        <div></div>
        <div></div>
      </div>
      
    </div>
  )
}
