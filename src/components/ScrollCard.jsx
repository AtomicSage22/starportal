import React from 'react';



const ScrollCard = ({ title, tasks, imageUrl }) => {
  return (
    <div className="bg-white/10 text-white rounded-xl border-[1px] border-white/10 shadow-lg p-2 flex items-center gap-4 cursor-pointer">
      <div className="flex-shrink-0 flex-grow-0 w-[160px] h-20">
        <img src={imageUrl} alt={title} className="object-cover w-full h-full border rounded-xl" />
      </div>
      <div className="ml-1 flex-grow w-full">
        <div className="text-xl font-normal leading-6 mb-4  overflow-hidden truncate shadow-sm">{title}</div>
        <hr className="dotted-line w-full my-2 "/>
        <div className='flex items-center mt-3  gap-3'>
        <div className='flex '>
        <p className="text-sm font-light leading-5 flex ">{tasks}  </p>
        <p className='text-sm ml-1'>Tasks</p>
        </div>
       
     <div className='grow-1 w-full max-w-64'>
     <div className="relative rounded-[100px] border border-black bg-white/5 shadow-inner h-[18px] p-[2px] flex items-center overflow-hidden ">
          <div className="bg-white/10 h-4 rounded-full  flex items-center border-black" style={{ width: '100%' }} ></div>
        </div>
     </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollCard;
