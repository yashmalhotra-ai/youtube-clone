import React from 'react'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'

const Body = () => {
    return (
        <div className=' bg-[#121212] h-screen flex overflow-x-hidden w-screen'>
            <div className='w-max'>
                <SideBar />
            </div>
            <div className='flex-grow'>
                <Outlet />
            </div>
        </div>
    )
}

export default Body
