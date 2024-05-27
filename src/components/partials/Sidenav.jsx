import { Link } from 'react-router-dom'

function Sidenav() {
  return (
    <div className='w-[20%] h-full border-r-2 border-zinc-400 p-10 overflow-hidden overflow-y-auto'>
        <h1 className='text-2xl text-white font-bold'>
           <i className="text-[#6556CD] ri-tv-fill mr-2"></i>
           <span className='text-2xl'>Cinematic Database</span>
        </h1>
        <nav className='flex flex-col text-zinc-400 text-xl gap-3'>
           <h1 className='text-white font-semibold text-xl mt-10 mb-5'>
              New Feeds
           </h1>
           <Link 
             to="/trending" 
             className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5'>
             <i className="ri-fire-fill mr-1"></i>
             Trending
           </Link>

           <Link 
             to="/popular"
            className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5'>
           <i className="ri-bard-fill mr-2"></i>
           Popular
           </Link>

           <Link 
            to="/movies"
            className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5'>
           <i className="ri-movie-2-fill mr-2"></i>
            Movies
           </Link>
           
           <Link 
           to="/tvshows"
            className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5'>
           <i className="ri-tv-2-fill mr-2"></i>
           Tv Shows
           </Link>

           <Link 
           to="/people"
            className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5'>
           <i className="ri-team-fill mr-2"></i>
           People
           </Link>
        </nav>
          <hr className='border-none h-[1px] bg-zinc-500'/>
        <nav className='flex flex-col text-zinc-400 text-xl gap-3'>
           <h1 className='text-white font-semibold text-xl mt-10 mb-5'>
              Website Information
           </h1>
           <Link 
             to="/about"
             className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5'>
           <i className="ri-information-2-fill mr-2"></i>About Us
           </Link>
           <Link 
             to="/get-in-touch"
            className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5'>
           <i className="ri-phone-fill mr-2"></i>Contact Us</Link>
           
        </nav>
    </div>
  )
}

export default Sidenav
