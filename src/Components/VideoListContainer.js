
import React from 'react';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';



const VideoListContainer = () => {

    const searchvideoapi = useSelector((state) => state.searchvideoapi.VIDEODATA);
    const sideBarVisibility = useSelector((state) => state.app.isMenuOpen);


    return (
        <div className={`${sideBarVisibility ? 'max-w-[92vw]' : 'max-w-[82vw]'} text-3xl font-bold bg-[#0F0F0F] m-1 p-2 grid grid-cols-1 gap-4 sm:grid-cols-2   md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3`}>
            {searchvideoapi ? (
                searchvideoapi.map((video) => (
                    <Link key={video.etag} to={"/videoplayer?vid=" + (video?.id?.videoId ? video?.id?.videoId : video?.id)} state={{ info: video }}>
                        <VideoCard info={video} />
                    </Link>
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>


    );
};

export default VideoListContainer;
