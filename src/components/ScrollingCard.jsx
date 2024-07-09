import React from 'react';
import ScrollCard from './ScrollCard';



const ScrollingCard = ({ data }) => {
  return (
    <div className="overflow-y-auto left-0 top-full w-full flex-col bg-[#101010] max-h-[350px] rounded-lg shadow-lg p-6 border-t-[1px] flex gap-2 ">
      {data.map((item, index) => (
        <ScrollCard
          key={index}
          title={item.title}
          tasks={item.tasks}
          imageUrl={item.imageUrl}
        />
      ))}
    </div>
  );
};

export default ScrollingCard;
