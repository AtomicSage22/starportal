'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { interact_text } from '@/assets'
import { Disclosure } from '@headlessui/react'


const SearchBar = ({setActive}) => {

  return (
    <form action="" className="relative mx-auto w-full bg-[#181818] rounded-full">
      <input 
        type="search"
        placeholder='Search for ecosystems, trending quests etc,.'
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
        className="peer relative z-10 h-12 t bg-transparent rounded-full border pl-12 outline-none w-full border-[#232020] focus:pl-16 focus:pr-4" /> 
      <Icon icon="akar-icons:search" color='#585858' className="absolute z-0 w-6 h-6 text-[#585858] top-3 left-3" />
    </form>
  );
}

export default function NavBar() {
  const [searchActive, setSearchActive] = useState(false) 
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Disclosure
    as="nav"
    className={`${
      isScrolled
        ? `sticky sticky-header top-0 z-50 border-b border-gray-800 backdrop-blur-lg`
        : "bg-black shadow border-b border-gray-800"
    }`}
  >
    <nav className={`border-b border-gray-700 h-16`}>
        <div className={`grid ${searchActive?'grid-cols-[1fr,6fr,1fr]':'grid-cols-[1fr,3fr,3fr,1fr]'} gap-2 mx-auto items-center w-[65%] transition-all duration-100 transform`}>
          <Image src={interact_text} alt="logo"  />
          <div className={` ${searchActive?'hidden':''} text-[#CFCFCF] links flex justify-between items-center px-3 `}>
              <Link href='#'>Compass</Link>
              <Link href='#'>Explore</Link>
              <Link href='#'>Academy</Link>
              <Link href='#'>NFTs</Link>
              <Link href='#'>For Projects</Link>
          </div>
          <SearchBar setActive={setSearchActive}/>
          <div className='flex items-center'>
            <div className="border border-[#FA8922] bg-[#100C20] ml-4 p-3 rounded-full">
                <Image
                  src="https://www.intract.io/assets/broadcast_or-04af786c.svg"
                  alt="logo"
                  width={30}
                  height={30}
                />
              </div>
            <button className='btn m-4 bg-white text-black font-medium py-1 w-[90%] rounded-md'>Sign In</button>
          </div>
        </div>
    </nav>
      
    </Disclosure>
  )
}
