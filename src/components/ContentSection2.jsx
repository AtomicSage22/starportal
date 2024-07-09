/* eslint-disable @next/next/no-img-element */
"use client"
import { sliceText } from "@/shared/utils"; 
import { useState } from "react";
import { ArcherContainer, ArcherElement } from "react-archer";

const ContentSection2 = () => {
  const [isClicked, setIsClicked] = useState(false);
  const quest1 = [
    {
      title: "#1: What are airdrops, and how...",
      tasks: 7,
      completedTasks: 0,
      img: "https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/6bb30883bc5042809b9d20926341f8ac.jpg",
    },
    {
      title: "#2: Types of airdrops...",
      tasks: 10,
      completedTasks: 0,
      img: "https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/c8d2455592d04b4f897b30da15836d5d.jpg",
    },
    {
      title: "#3: How to earn huge $$$ fro...",
      tasks: 11,
      completedTasks: 0,
      img: "https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/d59b0ff5b37141b2baf3e5e39157f408.png",
    },
    {
      title: "#4: Things to keep in mind!...",
      tasks: 7,
      completedTasks: 0,
      img: "https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/27d77aa021174529a9eae082de8196c9.jpg",
    },
  ];

  return (
    <ArcherContainer strokeColor="grey">
    <div className="flex flex-col md:flex-row justify-between w-full mt-20 h-[500px]">

      <div className="order-last md:order-first">
      <ArcherElement 
      id="cat2"
          >
        <div className="flex justify-center flex-col sm:flex-row md:flex-col mt-6  sm:relative sm:left-[355px] sm:mt-[120px]">
          
          <div className="flex justify-center p-4">
            {" "}
            {/* <CheckCircleIcon className="mr-8 sm:mr-12 rounded-full border border-[#1c1c1c] text-[#1c1c1c] size-8" /> */}
          </div>

          <div className="relative left-[150px] sm:static">
            <div className="relative w-48 h-[170px] rounded-2xl border border-[#212121]  bg-[rgba(255,255,255,0.05)] overflow-hidden p-2">
              <img
                src="https://static.highongrowth.xyz/erc1155-images/65017d014e5f24613adbfd67/83bd377d91ff441aa6f7c46a63c88506.png"
                alt="logo"
                className="object-cover w-full h-full rounded-2xl"
              />
            </div>
            <div className="flex items-center bg-[#1c1c1c] rounded-full w-[40px] h-[40px] relative bottom-6 left-[160px]">
              {/* <LockClosedIcon className="ml-2 rounded-full text-[#A1A1A1] size-6" /> */}
            </div>
          </div>

          <div className="md:static relative left-[150px]">
            <h1 className="text-[#9B9B9B]">Intract Certified: Learner NFT</h1>
            <p className="text-[#555454]">Your proof of</p>
            <span className="text-[#555454]">airdrop expertise</span>
          </div>
          <button
            type="button"
            className="md:static relative left-[150px] w-[190px] sm:w-[120px] text-white mt-2 sm:bg-[#1c1c1c] bg-[#434343] cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
          >
            Claim
          </button>
        </div>
        </ArcherElement>
      </div>

      <div className="p-8 sm:p-0">
      <ArcherElement 
            id="airdrops"
            relations={[
              {
                targetId: 'cat2',
                targetAnchor: 'right',
                sourceAnchor: 'left',
                style: { strokeDasharray: '5,5' },
              },
            ]}
        >
        <section onClick={()=>setIsClicked(!isClicked)} className="bg-[#1c1c1c] hover:bg-[#212121] sm:relative md:right-[310px] cursor-pointer rounded-tl-2xl rounded-tr-2xl shadow-lg border border-[rgba(92,92,92,0.2)] max-w-[550px]">
          <div className="flex sm:flex-col md:flex-row items-center md:items-start gap-6 max-w-[550px]  p-8 rounded-2xl">
            <div className="relative w-48 h-[170px] rounded-2xl border border-[#212121]  bg-[rgba(255,255,255,0.05)] overflow-hidden p-2">
              <img
                src="https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/85903745c34d42d684a2dc505768afa7.png"
                alt="logo"
                className="object-cover w-full h-full rounded-2xl"
              />
              <div className="relative bottom-10 left-1 md:left-9 bg-gray-800 px-4 py-1 rounded-full md:w-[100px] w-[110px] text-center text-white">
                4 Quests
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold text-white">
                Introduction to Airdrops
              </h2>
              <p className="text-gray-400">
                Your best bet to make it big in crypto!
              </p>
              <hr className="border-dashed border-gray-600 mt-4" />
              <div className="mt-4 flex items-center gap-4">
                <img
                  src="https://www.intract.io/assets/xp-icon-aacd204a.svg"
                  alt="logo"
                  width="18"
                  height="16"
                />
                <span className="text-white font-bold">1040 XPs</span>
              </div>
            </div>
          </div>
        </section>
      </ArcherElement>

         {isClicked&& <div className="bg-[#141414] sm:relative md:right-[310px] cursor-pointer sm:py-6 sm:px-6 p-6 px-3 shadow-lg max-w-[550px] h-[366px] overflow-scroll mb-6  rounded-bl-2xl rounded-br-2xl">
            {quest1.map((item, index) => {
              return (
                <div
                  className="flex border border-[rgba(92,92,92,0.2)] bg-[#212121] hover:bg-[#252525] rounded-lg sm:p-2 p-3 mb-4"
                  key={index}
                >
                  <div className="rounded-md">
                    <img
                      src={item.img}
                      className="w-30 h-20 rounded-2xl"
                      alt="img"
                    />
                  </div>
                  <div className="ml-4">
                    <p className="max-h-[24px] overflow-hidden">{sliceText(item.title, 27)}</p>

                    <hr className="border-dashed border-gray-600 mt-4 mb-4" />

                      <div className="flex min-w-[200px]">
                      <p className="mr-4">
                      {item.tasks} Task{" "}
                      </p>{" "}
                        <img
                          className="sm:w-[220px] w-[90px]"
                          src="/loading.png"
                          alt="img"
                        />
                        {/* <CheckCircleIcon className="border border-[#313030] ml-2 rounded-full text-[#3a3939] size-6" /> */}
                      </div>{" "}
            
                  </div>
                </div>
              );
            })}
          </div>}
      </div>
    </div>
    </ArcherContainer>
  );
};

export default ContentSection2;

