/* eslint-disable @next/next/no-img-element */
"use client"
import { sliceText } from "@/shared/utils";
import { useState } from "react";
import { ArcherContainer, ArcherElement } from 'react-archer';

const rootStyle = { display: 'flex', justifyContent: 'center', alignItems: 'flex-start'};
const rowStyle = { margin: '200px 0', display: 'flex', justifyContent: 'space-between' };
const boxStyle = { padding: '10px', border: '1px solid black' };


const ContentSection = () => {
  const [isClicked, setIsClicked] = useState(false);
  const quest = [
    {
      title: "#1: But what is crypto and...",
      tasks: 11,
      completedTasks: 0,
      img: "https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/4eeb6ff08f6640b8bd2edf23864d21c0.png",
    },
    {
      title: "#2: Setting up your own web3...",
      tasks: 8,
      completedTasks: 0,
      img: "https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/d425fe7f548542289fbd8919c89bc0ae.jpg",
    },
    {
      title: "#3: What the heck is a...",
      tasks: 8,
      completedTasks: 0,
      img: "https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/67e4ee7d187545ccbd28b4a159076068.jpg",
    },
    {
      title: "#4: Swapping and bridging?...",
      tasks: 10,
      completedTasks: 0,
      img: "https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/a0ad2f15685642b985913a3aef4208ff.jpg",
    },
    {
      title: "#5: NFTs and why they’re cool...",
      tasks: 6,
      completedTasks: 0,
      img: "https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/23c818f39768450298bb540fc3043bf7.jpg",
    },
    {
      title: "#6: Doing quests and winning...",
      tasks: 8,
      completedTasks: 0,
      img: "https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/71ae875a31a54215af6e14fd113c60f6.jpg",
    },
  ];

  return (
    <ArcherContainer strokeColor="red">
    
      <div className="flex flex-col md:flex-row h-[500px] justify-between bg-track-pattern bg-cover bg-center w-full">
        <div className="p-8 sm:p-0 ">
        <div style={rootStyle}>
          <ArcherElement
            id="root"
            relations={[
              {
                targetId: 'cat',
                targetAnchor: 'left',
                sourceAnchor: 'top',
                style: { strokeDasharray: '5,5' },
              },
            ]}
          >
            <div style={boxStyle}></div>
          </ArcherElement>
        </div>
          <ArcherElement id="basics">
            <section onClick={()=>setIsClicked(!isClicked)} className="bg-[#1c1c1c] hover:bg-[#212121] sm:relative md:left-[310px] cursor-pointer rounded-tl-2xl rounded-tr-2xl shadow-lg border border-[rgba(92,92,92,0.2)] max-w-[550px]">
              <div className="flex sm:flex-col md:flex-row items-center md:items-start gap-6 max-w-[550px]  p-8 rounded-2xl">
                <div className="relative w-[300px] h-[170px] rounded-2xl border border-[#212121]  bg-[rgba(255,255,255,0.05)] overflow-hidden p-2">
                  <img
                    src="https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/2d1ac16ea7c9416d94a74f2ba2fe8d4a.png"
                    alt="logo"
                    className="object-cover w-full h-full rounded-2xl"
                  />
                  <div className="relative bottom-10 left-1 md:left-9 bg-gray-800 px-4 py-1 rounded-full md:w-[100px] w-[110px] text-center text-white">
                    6 Quests
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-2xl font-bold text-white">
                    Basics of Crypto
                  </h2>
                  <p className="text-gray-400">
                    The safest and easiest place to start your crypto journey!
                  </p>
                  <hr className="border-dashed border-gray-600 mt-4" />
                  <div className="mt-4 flex items-center gap-4">
                    <img
                      src="https://www.intract.io/assets/xp-icon-aacd204a.svg"
                      alt="logo"
                      width="18"
                      height="16"
                    />
                    <span className="text-white font-bold">1490 XPs</span>
                  </div>
                </div>
              </div>
            </section>
          </ArcherElement>

          {isClicked && <div className="bg-[#141414] sm:relative md:left-[310px] cursor-pointer sm:py-6 sm:px-6 p-6 px-3 shadow-lg max-w-[550px] h-[366px] overflow-scroll  rounded-bl-2xl rounded-br-2xl">
            {quest.map((item, index) => {
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

        <ArcherElement 
            id="cat"
            relations={[
              {
                targetId: 'airdrops',
                targetAnchor: 'left',
                sourceAnchor: 'top',
                style: { strokeDasharray: '5,5' },
              },
            ]}
        >
        <div id="cat" className="flex  justify-center flex-col sm:flex-row md:flex-col mt-6  sm:relative sm:right-[355px] sm:mt-[120px]">
          <div className="flex justify-center p-4">
            {" "}
            {/* <CheckCircleIcon className="mr-8 sm:mr-12 rounded-full border border-[#1c1c1c] text-[#1c1c1c] size-8" /> */}
          </div>

          <div className="relative left-[150px] sm:static">
            <div className="relative w-48 h-[170px] rounded-2xl border border-[#212121]  bg-[rgba(255,255,255,0.05)] overflow-hidden p-2">
              <img
                src="https://static.highongrowth.xyz/erc1155-images/65017d014e5f24613adbfd67/1b1912563b964393b0478949efad5ed3.png"
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
            <p className="text-[#555454]">Your crypto black-belt</p>
            <span className="text-[#555454]">certificate</span>
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
    </ArcherContainer>
  );
};

export default ContentSection;
