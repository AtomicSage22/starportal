/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
// import { CheckCircleIcon, ClockIcon } from "@heroicons/react/20/solid";
// import { InformationCircleIcon } from "@heroicons/react/24/outline";
import React from "react";

const ContentSection3 = () => {
  return (
    <>
      <div className="MainDiv1 flex flex-col items-center md:flex-row md:justify-center bg-black w-full mt-20 border-b border-gray-700 pb-14">
        <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-16 p-4 md:p-0">
          <div className="ch1 border border-[#383838] bg-[#151515] rounded-2xl w-[400px]">
            <div className="flex gap-2 p-4 items-center">
              {/* <ClockIcon className="border bg-[#CC7123] border-[#2D2118] rounded-full text-[#3a3939] size-6" /> */}
              <p>Reward unlocks in</p>
            </div>
            <hr className="border-dashed border-gray-600 mt-4" />
            <img src="/timer.png" className="p-2 rounded-2xl" alt="timer" />

            <div className="ch2 mt-4 md:mt-0">
              <div className="border border-[#383838] bg-[#151515] rounded-2xl w-[400px] p-4">
                <img
                  src="https://www.intract.io/assets/kol-reward-12e6ae06.gif"
                  className="rounded-2xl"
                  alt="gif"
                />
                <hr className="border-dashed border-gray-600 mt-4" />
                <div className="flex justify-between mt-2">
                  <p className="text-[#717171]">Exclusive Community</p>
                  <div className="flex">
                    <img
                      src="https://www.intract.io/assets/discord-50baa5cf.svg"
                      alt="discord"
                    />
                    <p className="ml-2">Earndrop</p>
                  </div>
                </div>
                <div className="flex justify-between mt-2">
                  <p className="text-[#717171]">
                    Complete all Essential quests
                  </p>
                  {/* <CheckCircleIcon className="border border-[#313030] ml-2 rounded-full text-[#3a3939] size-6" /> */}
                </div>
                <div className="flex justify-between mt-2">
                  <p className="text-[#717171]">
                    Complete at least 1 Alpha Hub quest today
                  </p>
                  {/* <CheckCircleIcon className="border border-[#313030] ml-2 rounded-full text-[#3a3939] size-6" /> */}
                </div>
                <button
                  type="button"
                  className="text-white mt-2 bg-[#515151] flex justify-center w-full bg-opacity-50 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center"
                >
                  <p className="hover:ml-2 transition-all duration-300 ease-in-out">
                    Claim Now{" "}
                  </p>
                  <img
                    className="ml-2"
                    src="https://www.intract.io/assets/arrow-right-1c96f4ae.svg"
                    alt="arrow_icon"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="parent2 border border-[#383838] bg-[#151515] rounded-2xl w-[400px] h-[400px] mt-8 md:mt-0 md:ml-16 ">
          <div className="flex gap-2 p-4 items-center">
            <p className="text-[#717171]">Reward info</p>
            {/* <InformationCircleIcon className="bg-[#151515] rounded-full text-[#3a3939] size-6" /> */}
          </div>
          <hr className="border border-gray-800 mt-4" />
          <div className="p-4">
            <p>Free access to paid KOL (crypto earning) communities!</p>
            <br />
            <p className="text-[#717171]">
              Win access to exclusive earning communities of some of the
              greatest earners in crypto for a month, every 24 hours. Get access
              to unmatched insights, a close-knit community of the best airdrop
              earners, and more.
            </p>
            <br />
            <p className="text-[#717171]">
              To win: make sure you've connected your Twitter and Discord
              accounts - and follow our criteria!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentSection3;
