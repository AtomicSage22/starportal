"use client"
import React from "react";
import { useState } from "react";
import { RiDropdownList } from "react-icons/ri";
import TopcardSvg from "./TopcardSvg";
import ScrollingCard from "./ScrollingCard";
import MiddleSvg from "./MiddleSvg";

const TopCard = ({
  title,
  description,
  quests,
  xp,
  imageUrl,
  dropdownData
}) => {

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleToggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };
  return (
    <div onClick={handleToggleDropdown} className="bg-white/10 backdrop-blur-md rounded-2xl text-white  shadow-lg  flex w-[520px] flex-col">
      <div className="p-6 flex items-center gap-6 cursor-pointer rounded-3xl border-white/5 border-[1px] border-b-0 transition ease ">
        <div className="absolute top-2  right-3 p-2 text-[#fff3] text-base transition ease-in delay-300">
  <RiDropdownList/>
        </div>
        <div className="lex-shrink-0 flex-grow-0 w-[270px] h-[180px] w p-2 rounded-2xl border-[1px] border-white/5 relative">
          
          <img src={imageUrl} alt={title} className="w-full h-full rounded-xl object-cover " />

       
          <div className="w-max h-10  items-center flex pt-[11px] pb-[11px] pr-6 pl-6 rounded-[1000px] border-[1px] border-white/5 shadow-sm bg-white/5 backdrop-blur-md absolute bottom-4  left-1/2	-translate-x-2/4 mb-0 ">
            {quests} Quests
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-2xl mb-2 font-normal	 leading-8 ">{title}</div>
          <div className="text-gray-400 text-lg leading-5 mb-4 overflow-hidden text-ellipsis">{description}</div>
          <hr className="dotted-line w-full my-2 "/>
          <div className="mt-4 flex items-center">
          <div className="h-8 pt-2 pb-2 pr-3 pl-3 flex justify-center rounded-[1000px] border-[0.5px] border-white/5 bg-white/5 text-white text-sm font-normal leading-4 items-center gap-1 w-max
          ">
          <span className="text-yellow-400">
              <img src="coin.svg" alt="XP" className="inline-block w-6 h-6" />
            </span>
            <span className="ml-2">{xp} XPs</span>
          </div>
          </div>
        </div>
      </div>
      {isDropdownVisible && (
        <div className="mt-4">
          <ScrollingCard data={dropdownData}
 />
        </div>
      )}
      <TopcardSvg/>
      <MiddleSvg/>
    </div>
  );
};

export default TopCard;
