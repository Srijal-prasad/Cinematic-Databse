import React from 'react'
import notfound from "/404.gif";
import { Link, useNavigate } from 'react-router-dom';

function Notfound() {
    const navigate=useNavigate();
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-black'>
        <Link
              onClick={()=>navigate(-1)}
              className="absolute hover:text-[#6556CD] ri-close-circle-fill text-5xl text-white right-[5%] top-[5%]">
        </Link>
    <img className='h-[50%] object-cover' src={notfound} alt=''></img>
    </div>
  )
}

export default Notfound
