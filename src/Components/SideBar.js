import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchSearchVideo, getVideoData } from '../utils/VideoDataSlice';
const SideBar = () => {
    const dispatch = useDispatch()
    let displaySideBar = useSelector((store) => store.app.isMenuOpen);
    const [selectedItem, setSelectedItem] = useState('Home');
    const Subscription = {
        SubscriptionData:
            [
                {
                    name: "GeeksforGeeks Practice",
                    CDN_IMG: "https://yt3.ggpht.com/ytc/AIf8zZSZaAD9ungABeRQJsH5YxycxGmiIfJlCN7WQGOH=s88-c-k-c0x00ffffff-no-rj",
                },
                {
                    name: "College Wallah",
                    CDN_IMG: "https://yt3.ggpht.com/RyeP9L6S_rfuxMCcs9OnWaODqDpgSi9NyzQTtT_aSXIvdoe1jBuVr7kPBvsZJB6T3EEKQWlTnw=s88-c-k-c0x00ffffff-no-rj"
                },
                {
                    name: "Take you Forward",
                    CDN_IMG: "https://yt3.ggpht.com/ytc/AIf8zZTrgnjr_yPdUVQUOGEIAuZ8tc4oP7DlR-_aR1rO=s88-c-k-c0x00ffffff-no-rj"
                },
                {
                    name: "Dhruv Rathee",
                    CDN_IMG: "https://yt3.ggpht.com/oQ2NQMuq-9IS6_MZdsGXa0RWecaACremA01Z7jo-YpoEF1H6PyUF8PZzXkV10OYwSP3UMJDeTg=s88-c-k-c0x00ffffff-no-rj"
                },
                {
                    name: "The Deshbhakt",
                    CDN_IMG: "https://yt3.ggpht.com/wYGFSC15QYFe-lyOt3-MhR23aaNyOIKt3DG2RNj5V_uk9JDeayKHQK_Nx9oEzjiTmlCA5owo=s88-c-k-c0x00ffffff-no-rj"
                },
                {
                    name: "Gate Smasher",
                    CDN_IMG: "https://yt3.ggpht.com/ytc/AIf8zZSZkVQsivt-Y8jrTqs1Z3apMABMQCpVPf2kXkDD4g=s88-c-k-c0x00ffffff-no-rj"
                },
            ]
    };

    const getSideBarVideo = (value) => {
        dispatch(fetchSearchVideo(value))
    }

    const getHome = () => {
        dispatch(getVideoData());
    }

    const handleItemClick = (item) => {
        setSelectedItem(item)
    }

    // bg-[#272727]
    return (
        <div className={` bg-[#0F0F0F] text-white  ${displaySideBar ? 'w-[50px]' : 'w-52'} flex flex-col h-full overflow-y-auto`}>
            <div className='flex flex-col w-full  border-b-2 text-center p-2 '>
                <ul className='flex flex-col'>
                    <Link to="/"> <li onClick={() => {
                        handleItemClick('Home')
                        getHome()
                    }} title='Home' className={` flex items-center  mt-[10px] mx-auto  hover:bg-[#3D3D3D] p-1 rounded-3xl transition flex-wrap ${displaySideBar ? ' justify-center text-[12px]' : 'justify-start '} ${selectedItem === 'Home' ? 'bg-[#272727]' : ''} `}>
                        <div className={`fill-white ${displaySideBar ? 'pr-[4px]' : 'pr-[25%]'}`}><svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="30" viewBox="0 0 24 24" width="30" focusable="false" className='  pointer-events-none block  '><g><path d="M4 21V10.08l8-6.96 8 6.96V21h-6v-6h-4v6H4z"></path></g></svg></div>Home
                    </li>
                    </Link>
                    <Link to="/">
                        <li onClick={() => {
                            handleItemClick('Live')
                            getSideBarVideo('Live')
                        }} className={`flex items-center w-[90%] mt-[10px] mx-auto hover:bg-[#3D3D3D] p-1 rounded-3xl transition flex-wrap ${displaySideBar ? ' justify-center text-[12px]' : 'justify-start'} ${selectedItem === 'Live' ? 'bg-[#272727]' : ''} `}><div className={`fill-white ${displaySideBar ? 'pr-[4px]' : 'pr-[25%]'}`}><svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="30" viewBox="0 0 24 24" width="30" focusable="false" className='pointer-event-none block '><g><path d="M14 12c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM8.48 8.45l-.71-.7C6.68 8.83 6 10.34 6 12s.68 3.17 1.77 4.25l.71-.71C7.57 14.64 7 13.39 7 12s.57-2.64 1.48-3.55zm7.75-.7-.71.71c.91.9 1.48 2.15 1.48 3.54s-.57 2.64-1.48 3.55l.71.71C17.32 15.17 18 13.66 18 12s-.68-3.17-1.77-4.25zM5.65 5.63l-.7-.71C3.13 6.73 2 9.24 2 12s1.13 5.27 2.95 7.08l.71-.71C4.02 16.74 3 14.49 3 12s1.02-4.74 2.65-6.37zm13.4-.71-.71.71C19.98 7.26 21 9.51 21 12s-1.02 4.74-2.65 6.37l.71.71C20.87 17.27 22 14.76 22 12s-1.13-5.27-2.95-7.08z"></path></g></svg></div>Live
                        </li>
                    </Link>
                    <Link to="/">
                        <li onClick={() => {
                            handleItemClick('gaming')
                            getSideBarVideo('gaming')
                        }} className={`flex items-center w-[90%] mt-[10px] mx-auto hover:bg-[#3D3D3D] p-1 rounded-3xl transition flex-wrap ${displaySideBar ? ' justify-center text-[12px]' : 'justify-start'} ${selectedItem === 'gaming' ? 'bg-[#272727]' : ''} `}>
                            <div className={`fill-white ${displaySideBar ? 'pr-[4px]' : 'pr-[25%]'}`}><svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="30" viewBox="0 0 24 24" width="30" focusable="false" className='pointer-event-none block '><path d="M10 12H8v2H6v-2H4v-2h2V8h2v2h2v2zm7 .5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5.67 1.5 1.5 1.5 1.5-.67 1.5-1.5zm3-3c0-.83-.67-1.5-1.5-1.5S17 8.67 17 9.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5zm-3.03-4.35-4.5 2.53-.49.27-.49-.27-4.5-2.53L3 7.39v6.43l8.98 5.04 8.98-5.04V7.39l-3.99-2.24m0-1.15 4.99 2.8v7.6L11.98 20 2 14.4V6.8L6.99 4l4.99 2.8L16.97 4z"></path></svg></div>
                            Gaming
                        </li>
                    </Link>
                    <Link to="/">
                        <li onClick={() => {
                            handleItemClick('Movie')
                            getSideBarVideo('Movie')
                        }} className={`flex items-center w-[90%] mt-[10px] mx-auto hover:bg-[#3D3D3D] p-1 rounded-3xl transition flex-wrap ${displaySideBar ? ' justify-center text-[12px]' : 'justify-start'} ${selectedItem === 'Movie' ? 'bg-[#272727]' : ''} `}>
                            <div className={`fill-white ${displaySideBar ? 'pr-[4px]' : 'pr-[25%]'}`}><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" className='pointer-event-none block '><path d="m22.01 4.91-.5-2.96L1.64 5.19 2 8v13h20V8H3.06l18.95-3.09zM5 9l1 3h3L8 9h2l1 3h3l-1-3h2l1 3h3l-1-3h3v11H3V9h2z"></path></svg></div>
                            Movie
                        </li>
                    </Link>
                    <Link to="/">
                        <li onClick={() => {
                            handleItemClick('Shorts')
                            getSideBarVideo('Shorts')
                        }} className={`flex items-center w-[90%] mt-[10px] mx-auto hover:bg-[#3D3D3D] p-1 rounded-3xl transition flex-wrap ${displaySideBar ? ' justify-center text-[12px]' : 'justify-start'} ${selectedItem === 'Shorts' ? 'bg-[#272727]' : ''} `}>
                            <div className={`fill-white ${displaySideBar ? 'pr-[4px]' : 'pr-[25%]'}`}><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" className='pointer-event-none block '><path d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"></path></svg></div>
                            Shorts
                        </li>
                    </Link>
                    <Link to="/">
                        <li onClick={() => {
                            handleItemClick('Sports')
                            getSideBarVideo('Sports')
                        }} className={`flex items-center w-[90%] mt-[10px] mx-auto hover:bg-[#3D3D3D] p-1 rounded-3xl transition flex-wrap ${displaySideBar ? ' justify-center text-[12px]' : 'justify-start'} ${selectedItem === 'Sports' ? 'bg-[#272727]' : ''} `}>
                            <div className={`fill-white ${displaySideBar ? 'pr-[4px]' : 'pr-[25%]'}`}><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" className='pointer-event-none block '><path d="M18 5V2H6v3H3v6l3.23 1.61c.7 2.5 2.97 4.34 5.69 4.38L8 19v3h8v-3l-3.92-2.01c2.72-.04 4.99-1.88 5.69-4.38L21 11V5h-3zM6 11.38l-2-1V6h2v5.38zM15 21H9v-1.39l3-1.54 3 1.54V21zm2-10c0 2.76-2.24 5-5 5s-5-2.24-5-5V3h10v8zm3-.62-2 1V6h2v4.38z"></path></svg></div>
                            Sports
                        </li>
                    </Link>
                </ul>
            </div>
            {
                displaySideBar ? null : <div className='flex flex-col w-full  border-b-2 text-center p-2  text-sm '>
                    <h2 className=' text-left font-bold'>Subscription</h2>
                    <ul>
                        {Subscription.SubscriptionData.map((item, index) => (
                            <Link key={index} onClick={() => {
                                handleItemClick(item.name)
                                getSideBarVideo(item.name)
                            }} to="/">
                                <li className={`flex items-center w-[90%] mt-[10px] mx-auto hover:bg-[#3D3D3D] p-1 rounded-3xl transition whitespace-nowrap gap-3 overflow-x-aut ${selectedItem === item.name ? 'bg-[#272727]' : ''}`}>
                                    <img id="img" draggable="false" className=" rounded-2xl " height="24" width="24" alt="" src={item.CDN_IMG}></img>
                                    {item.name}
                                </li>
                            </Link>
                        ))}

                    </ul>
                </div>
            }
        </div>
    )
}

export default SideBar
