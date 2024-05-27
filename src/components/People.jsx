import axios from '../utils/axios';
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';
import InfiniteScroll from "react-infinite-scroll-component";
import Cards from './partials/Cards';
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";
function People() {
    document.title="Cinematic Database | people Shows"
    const navigate=useNavigate();
    const [category, setcategory] = useState("popular");
    const [people, setpeople] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, sethasMore] = useState(true);
   

    const GetPeople=async()=>{
        try{
           const {data}=await axios.get(`/person/popular?page=${page}`
          );

          if(data.results.length > 0){
            setpage(page + 1);
            setpeople((prevState)=>[...prevState, ...data.results]);

          } else{
                 sethasMore(false);
          }
           
        }catch(error){
          console.log("Error: ", error);
        }
     };

      const refreshHandler =()=>{
        if(people.length ===0){
          GetPeople();
        }else {
           setpage(1);
          setpeople([]);
          GetPeople();
        }
      };


     useEffect(()=>{
           refreshHandler();
     },[category]);



  return people.length > 0 ? (
    <div className='w-screen h-screen '>

        <div className='px-[5%] w-full flex items-center justify-between  '>
            <h1 className=' text-2xl text-zinc-400 font-semibold'>
            <i 
              onClick={()=>navigate(-1)}
              className="hover:text-[#6556CD] ri-arrow-left-line">
            </i>{" "}
               people
            </h1>
            <div className='flex items-center w-[80%]'>
                 <Topnav/>
                 <div className='w-[2%]'></div>

            </div>
        </div>

          <InfiniteScroll
              dataLength={people.length}
              next={GetPeople}
              hasMore={hasMore}
              loader={<h1 className='text-white'>Loading...</h1>}
          >
             <Cards data={people} title="people"/>
          </InfiniteScroll>

        

    </div>
  ) : (
    <Loading/>
  )
}

export default People
