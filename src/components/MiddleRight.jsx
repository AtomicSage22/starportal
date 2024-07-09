import React from 'react';
import { BsCircleFill } from 'react-icons/bs';

const MiddleRight = () => {
    return (
        <div className='flex w-full justify-end relative -mt-6'>
            <div>
                <div className='flex w-12 h-12 p-3 justify-center items-center rounded-[1000px] border-[1px] backdrop-blur-md text-[#fff3] bg-white/5 border-white/10 ml-14 text-3xl'>
                    <BsCircleFill />
                </div>
                <div className='relative w-[160px] z-10'>
                    <div className='w-[160px] h-[180px] rounded-3xl border-[1px] bag-white/10 mr-[120px] mt-4 flex items-center justify-center overflow-hidden'>
                        <img src="cat.png" className='w-[147px] h-[165px] rounded-[20px] object-cover z-[1]' alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MiddleRight;