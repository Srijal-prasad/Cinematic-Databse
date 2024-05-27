import React from 'react';
import Topnav from './partials/Topnav';
import { useNavigate } from 'react-router-dom';


function About() {
    const navigate=useNavigate();
  return (
    <div className='w-screen h-screen bg-[#1F1E24] text-white overflow-hidden'>
        <div className='flex items-center justify-between'>
        <h1 className='p-[3%] text-3xl text-zinc-400 font-semibold'>
            <i 
              onClick={()=>navigate(-1)}
              className="hover:text-[#6556CD] ri-arrow-left-line">
            </i>{" "}
               About Us
            </h1>
        </div>
      <div className='header flex flex-col items-center justify-center h-screen ml-20 font-serif' >
         <div className='content p-20 0 70  mx-auto text-center'>
               <h1 className='text-4xl md:text-8xl font-bold font-cursive animate-bounce'>Hi There!</h1>
               <img 
               className='border-0 overflow-clip over' 
               src='https://www.themoviedb.org/assets/2/v4/marketing/deadpool-06f2a06d7a418ec887300397b6861383bf1e3b72f604ddd5f75bce170e81dce9.png'>
                
               </img>
                
               <h3 className='text-5xl mt-5'>Welcome to Cinematic Database</h3>
               <p className='text-lg md:text-md mt-3 animate-pulse'>We offers a wide range of features to enhance your movie browsing experience. Search for your favorite titles, explore curated lists, and discover new releases. Dive deeper into movies with detailed information, trailers, cast and crew details, and ratings.</p>
         </div>
         <div className='main-content py-16 px-4 md:px-10'>
            <h2 className='text-2xl md:text-3xl font-bold mb-20'></h2>
            <p className='text-lg md:text-xl'></p>
      </div>
      </div>
     
    </div>
  );
}

export default About;
