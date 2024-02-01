import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchSearchVideo } from '../utils/VideoDataSlice'

const BtnData = ['ALL', 'Computer Programming', 'Data Structure and Algorithms ', 'MERN Stack', 'Geopolitics', 'Civil Services Exam', 'National Defence Academy', 'Code with Chai', 'Striver', 'chai pe charcha', 'Ideal way', 'Great Going']

const ButtonList = () => {
  const dispatch=useDispatch();


  const Slider = useSelector((state) => state.app.isMenuOpen)
  const btnContainerRef = useRef(null);


  const handleLeftScroll = () => {
    const container = btnContainerRef.current;
    if (container) {
      container.scrollLeft -= 100;
    }
  };

  const handleRightScroll = () => {
    const container = btnContainerRef.current;

    if (container) {
      container.scrollLeft += 100;
    }
  }
  const desiredSearch = (item) => {
    dispatch(fetchSearchVideo(item))
  }


  return (
    <>
      <div className='flex  items-center '>

        <div onClick={() => { handleLeftScroll() }} className=' flex justify-center items-center w-[5%]'>
          <svg className=' cursor-pointer hover:bg-[#3D3D3D] rounded-3xl' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" ><path d="M14.96 18.96 8 12l6.96-6.96.71.71L9.41 12l6.25 6.25-.7.71z" fill='white'></path></svg>

        </div>

        <div ref={btnContainerRef} className={` ${Slider ? 'max-w-[80vw]' : 'max-w-[75vw]'}  flex overflow-auto text-white font-semibold no-scrollbar transition `}>
          {BtnData.map((item, index) => {
            return (
              <div key={index} className='select-none m-2 flex justify-center items-center text-sm cursor-pointer '>
                <button className='bg-[#222222] p-2 hover:bg-[#3D3D3D] transition rounded-md w-max' onClick={() => { desiredSearch(item) }}>{item}</button>
              </div>
            )
          })}
        </div>

        <div onClick={() => handleRightScroll()} className='flex justify-center items-center  w-[5%]' >
          <svg className='hover:bg-[#3D3D3D] rounded-3xl' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" fill='white'><path d="m9.4 18.4-.7-.7 5.6-5.6-5.7-5.7.7-.7 6.4 6.4-6.3 6.3z"></path></svg>

        </div>
      </div>
    </>
  )
}

export default ButtonList;
