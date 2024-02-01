import React from 'react';
import ButtonList from './ButtonList';
import VideoListContainer from './VideoListContainer';

const MainContainer = () => {


    return (
        <div className='bg-[#0F0F0F] flex flex-col gap-1 overflow-x-hidden h-screen'>
            <ButtonList />
            <VideoListContainer />
        </div>
    );
};

export default MainContainer;
