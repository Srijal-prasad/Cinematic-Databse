import React from 'react'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux'
import {Link, useNavigate, useLocation } from 'react-router-dom';
import Notfound from '../Notfound';

function Trailer() {
    const navigate=useNavigate();
    const { pathname }=useLocation();
    const category = pathname.includes("movie")? "movie" : "tv";
    const ytvideo = useSelector((state)=>state[category].info.videos);
      
  return ytvideo ? (
    
    <div className='bg-[rgba(0,0,0,.9)] absolute z-[100] top-0 left-0 w-screen h-screen flex items-center justify-center'>
         <Link
              onClick={()=>navigate(-1)}
              className="absolute hover:text-[#6556CD] ri-close-circle-fill text-5xl text-white right-[5%] top-[5%]">
        </Link>
        <ReactPlayer 
        controls
         height={800}
         width={1500}
         url={`https://www.youtube.com/watch?v=${ytvideo.key}`}
        />
    </div>
  ) :<div className='bg-[rgba(0,0,0,.9)] absolute z-[100] top-0 left-0 w-screen h-screen flex items-center justify-center'>
    <Notfound/>
   </div>
}

export default Trailer
