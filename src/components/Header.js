import React, { useEffect, useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { CacheResults } from '../utils/searchSlice';

const Header = () => {

  const dispatch = useDispatch();

  const searchCache = useSelector((store)=>store.search)

  const [searchQuery,setSearchQuery] = useState(" ");

  const [suggestions ,setSuggestions] = useState([]);

  const [showSuggestions,setShowSuggestions] = useState(false);


 /**
  * 
  * searchCache = {
  * 
  * "iphone": ["iphone11"," iphone14"]
  * 
  * }
  * 
  * searchQuery = iphone
  */

  useEffect(()=>{

    // Make an API Call after every key press
    // but if the diffrence between 2 API calls is <200ms
    // then decline the API Call

     const timer = setTimeout(()=>{

      if(searchCache[searchQuery]) {

        setSuggestions(searchCache[searchQuery]);


      }
      else{


        getSearchSuggestions();
      }


    


    },3000);

    return () =>{

      clearTimeout(timer);
    }

    


  },[searchQuery]);

/**
 * Key - i
 * render the component
 * useEffect();
 * -start timer => make an api call after 200ms
 * -Key -ip
 * -destroy the component(useEffect return method)
 * -re-render the the component
 * -useEffect() 
 * -start timer =>make an api call after 200ms
 * 
 * 
 * 
 * 
 * setTimeout(200) - make an API Call after 200ms 
 */

  const getSearchSuggestions = async() =>{

    console.log("API CALL -" + searchQuery);

    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);

    const json = await data.json();

   setSuggestions(json[1]);

   //update Cache

   dispatch(CacheResults(
    {
      [searchQuery]:json[1],
    }
   ));
  }

  const toggleMenuHandler = () =>{


    dispatch(toggleMenu())


  };


 
  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg '>

        <div className='flex col-span-1'>

       
        <img onClick = {()=>toggleMenuHandler()} className ='h-8 cursor-pointer'src = "https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png" alt = "hamburger menu"/>
        
        <a href="/">
        <img  className = "mx-2 h-7  " src = "https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt ="youtube"/>
        </a>
        </div>
  
        <div className='col-span-10 px-10 '>

          <div>
            <input  className = "w-1/2 border border-gray-400 rounded-l-full px-5 py-2 " type = "text" placeholder='Search' value = {searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} 
            onFocus={()=>setShowSuggestions(true)} 
            onBlur = {()=>setShowSuggestions(false)}/>
            <button className="border border-gray-400 p-2 rounded-r-full  bg-gray-100">
           🔍
</button>
</div>


{showSuggestions &&(

<div className='fixed bg-white py-2 px-2 w-[32rem] shadow-lg rounded-lg border border-gray-100'>
  <ul>
   

     {suggestions.map((suggestion)=>  <li key = {suggestion} className='py-2 px-3 shadow-sm hover:bg-gray-100'>{suggestion}</li>)}
  </ul>
</div>)}
        </div>
        

        

        <div className='col-span-1'>
          
           
  <img className = " h-9" src="https://cdn-icons-png.flaticon.com/512/847/847969.png" alt="User Avatar"/>
 
        </div>
    </div>


 

  )
}

export default Header;
