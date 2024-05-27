import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Contact() {
  const navigate=useNavigate();
 
  return (
    <div className='px-[10%] w-screen h-[150vh] bg-[#1f1E24] flex flex-col items-center'>
      <nav className=' mr-10 mt-5 h-[10vh] w-full text-zinc-400 font-semibold flex items-center gap-5 text-3xl'>
        <Link
          onClick={() => navigate(-1)}
          className="hover:text-[#6556CD] ri-arrow-left-line">   
        </Link>
        <h1 className='text-zinc-400 font-semibold'>Contact Us</h1>
      </nav>
      <div className=" text-zinc-400 w-[50%] h-[30vh] overflow-x-hidden overflow-y-auto shadow-2xl shadow-[rgba(255,255,255,.3)] border-2 border-zinc-700 mt-10 p-5 ">
        <ul className="list-disc">
          <li className="hover:text-white p-5 rounded hover:bg-[#19191d] duration-300 cursor-pointer">
            <span className=" ">
              <strong>Email:</strong> srijalprasad@gmail.com
            </span>
          </li>
          <li className="hover:text-white p-5 rounded hover:bg-[#19191d] duration-300 cursor-pointer">
            <span className="">
              <strong>Phone:</strong> +91 9473446793
            </span>
          </li>
          <li className="hover:text-white p-5 rounded hover:bg-[#19191d] duration-300 cursor-pointer">
            <span className="">
              <strong>Address:</strong> Hyderabad
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Contact
