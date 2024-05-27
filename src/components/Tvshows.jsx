import axios from '../utils/axios';
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';
import InfiniteScroll from "react-infinite-scroll-component";
import Cards from './partials/Cards';
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";

function Tvshows() {
    document.title="Cinematic Database | TV Shows"
    const navigate=useNavigate();
    const [category, setcategory] = useState("airing_today");
    const [tv, settv] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, sethasMore] = useState(true);
   

    const GetTv=async()=>{
        try{
           const {data}=await axios.get(`/tv/${category}?page=${page}`
          );

          if(data.results.length > 0){
            setpage(page + 1);
            settv((prevState)=>[...prevState, ...data.results]);

          } else{
                 sethasMore(false);
          }
           
        }catch(error){
          console.log("Error: ", error);
        }
     };

      const refreshHandler =()=>{
        if(tv.length ===0){
          GetTv();
        }else {
           setpage(1);
          settv([]);
          GetTv();
        }
      };


     useEffect(()=>{
           refreshHandler();
     },[category]);



  return tv.length > 0 ? (
    <div className='w-screen h-screen '>

        <div className='px-[5%] w-full flex items-center justify-between  '>
            <h1 className=' text-2xl text-zinc-400 font-semibold'>
            <i 
              onClick={()=>navigate(-1)}
              className="hover:text-[#6556CD] ri-arrow-left-line">
            </i>{" "}
               Tv Shows<small className=' ml-2 text-sm text-zinc-600'>({category})</small>
            </h1>
            <div className='flex items-center w-[80%]'>
                 <Topnav/>
                 <Dropdown 
                  title="Category" 
                  options={["on_the_air", "top_rated", "popular", "airing_today"]}
                  func={(e)=>setcategory(e.target.value)}
                 />
                 <div className='w-[2%]'></div>

            </div>
        </div>

          <InfiniteScroll
              dataLength={tv.length}
              next={GetTv}
              hasMore={hasMore}
              loader={<h1 className='text-white'>Loading...</h1>}
          >
             <Cards data={tv} title="tv"/>
          </InfiniteScroll>

        

    </div>
  ) : (
    <Loading/>
  )
}

export default Tvshows
