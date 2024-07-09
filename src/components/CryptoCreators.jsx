/* eslint-disable @next/next/no-img-element */
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

const CryptoCreators = () => {
  return (
    <>


      <div className="w-full pt-24 pb-10 sm:pt-32 sm:pb-24 md:pb-16 lg:pb-12 xl:pb-10  border-b border-gray-700">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto w-full lg:mx-0">
            <h1 className="flex justify-center text-2xl">Top Crypto Creators and Projects to Follow</h1>
            <p className='flex justify-center text-[#717171]'>Answers to your crypto doubts, straight from the experts</p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-1 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4"
          >
            {images.map((item, index) => (
              <li key={index}>
                <img
                  alt="logo"
                  src={item.imageUrl}
                  className="rounded-2xl object-cover"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default CryptoCreators;
