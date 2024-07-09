/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

const images = [
  {
    id: 1,

    imageUrl: "/poster1.png",
  },
  {
    id: 2,

    imageUrl: "/poster2.jpeg",
  },
  {
    id: 3,

    imageUrl: "/poster3.jpeg",
  },
  {
    id: 4,

    imageUrl: "/poster4.jpeg",
  },
];

const CryptoDictionary = () => {
  return (
    <>
      <div className="w-full pb-24 sm:pb-32 pt-16 sm:pt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <div className="mx-auto w-full lg:mx-0">
            <h1 className="flex justify-center text-2xl">Crypto Dictionary</h1>
            <p className="flex justify-center  text-[#717171]">
              Your one-stop to catch up on all crypto terms
            </p>
          </div>
         
            <Image 
              className="rounded-2xl w-full mt-6 hover:cursor-pointer" 
              width={ 1200 } 
              height={ 600 }
              alt="logo" 
              src={"/robo.jpeg"} 
            />
            <div className="text-[#A9A5A8] absolute bottom-6 left-14 z-10">
              <h3 className="text-2xl font-medium">Web3 + Degen Glossary</h3>
              <p >Your own crypto dictionary</p>
            </div>
          
        
        </div>
      </div>
    </>
  );
};

export default CryptoDictionary;
