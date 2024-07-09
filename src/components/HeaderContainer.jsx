import React from 'react';
import TopCard from './Topcard';
import MiddleRight from './MiddleRight';

const dummyData = [
    { title: '#1: What is crypto and...', tasks: 11, imageUrl: 'https://via.placeholder.com/150' },
    { title: '#2: How to create a wallet', tasks: 9, imageUrl: 'https://via.placeholder.com/150' },
    { title: '#3: Understanding blo...', tasks: 7, imageUrl: 'https://via.placeholder.com/150' },
    { title: '#4: Trading basics', tasks: 5, imageUrl: 'https://via.placeholder.com/150' },
    { title: '#5: Security tips', tasks: 8, imageUrl: 'https://via.placeholder.com/150' },
    { title: '#6: Advanced trading', tasks: 6, imageUrl: 'https://via.placeholder.com/150' },
];

const HeaderContainer = () => {
    return (
        <div className=''>
            <div className='relative mx-auto list-none p-0 w-full h-full'>
                <div className='pl-32 pr-32'>
                    <section className='mx-w-[1200px] pt-0 pb-0 pr-4 pl-4 w-full relative flex justify-center flex-col'>
                        <TopCard title="Basics of Crypto" />
                        {/* Add other components or elements as needed */}
                    </section>
                </div>
            </div>
        </div>
    );
};

export default HeaderContainer;