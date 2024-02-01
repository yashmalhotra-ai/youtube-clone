import React, { useState, useEffect } from 'react'
import { useSearchParams, useLocation } from 'react-router-dom'
import { RANDOM_VIDEO_API } from '../Constant';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import CommentContainer from './CommentContainer';
const VideoPlayer = () => {
  // whenever we pass the data through the state in React Link then that state will be store inside location



  const { info } = useLocation().state;

  const { snippet } = info;
  const numberOfRandomVideos = 10;
  const [videoId] = useSearchParams();
  const [randomVideoData, setrandomVideoData] = useState()
  const [showMore, setShowMore] = useState(false)

  useEffect(() => {
    // Avoid Calling API Twice
    const timer = setTimeout(() => getRandomVideoData(), 100)
    return () => {
      clearTimeout(timer)
    }
  }, [])

  const getRandomVideoData = async () => {
    try {
      const response = await fetch(RANDOM_VIDEO_API + numberOfRandomVideos);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
      const { items } = await response.json();
      setrandomVideoData(items);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };




  return (
    <>
      <div className='flex  text-white h-[90vh] overflow-auto  flex-wrap xl:flex-nowrap '>

        <div className={`p-2 m-4 border-red-500 h-max`}>
          <iframe className={`object-cover w-[100%] rounded-2xl `} height="450" src={"https://www.youtube.com/embed/" + videoId.get("vid") + "?autoplay=1"} title="YouTube video player" allowFullScreen="allowFullScreen" autoPlay>
          </iframe>
          <div className='w-[95%] '>
            <h3 className='text-sm font-semibold sm:text-2xl' >{snippet?.title}</h3>
            <div className='flex gap-2 mt-4'>
              <img className='rounded-3xl w-[50px] h-[50px]' src={snippet?.thumbnails?.default?.url} alt="" />
              <div className='w-full h-6 '>
                <span className='flex gap-1 items-center' >{snippet?.channelTitle}
                  <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 24 24" width="16" focusable="false" ><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM9.8 17.3l-4.2-4.1L7 11.8l2.8 2.7L17 7.4l1.4 1.4-8.6 8.5z" fill='white'>

                  </path>
                  </svg>
                </span>
                <p className='text-sm opacity-50'>21.8M subscribers</p>
              </div>
              <button className="bg-[#F1F1F1] px-4 py-2  hover:bg-[#D9D9D9] text-black font-semibold rounded-3xl ml-6">Subscribe</button>
              <div>
              </div>
            </div>


          </div>
          <div className='w-[50vw] bg-[#282727] p-4 rounded-2xl hover:bg-[#403F3F] mt-12 h-max' >
            <p className='font-semibold text-base' >8.8M views  Streamed 3 days ago</p>
            <p className=' text-sm'>
              {showMore ? snippet.description : `${snippet.description.substring(0, 150)}...`}
              <span className='font-semibold cursor-pointer' onClick={() => setShowMore(!showMore)}>{showMore ? " Show less" : " Show more"}</span>
            </p>
          </div>
          <CommentContainer />
        </div>
        <div className='m-4 border-green-500 sm:w-[60%] w-[80%]'>
          {randomVideoData ? (
            randomVideoData.map((video) => (
              <Link key={video.id.videoId} to={{ pathname: '/videoplayer', search: `?vid=${video.id.videoId}` }} state={{ info: video }} > <VideoCard info={video} /> </Link>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </>
  )
}

export default VideoPlayer
