import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';


const Header = () => {


 
  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg '>

        <div className='flex col-span-1'>

        <img className ='h-8' src = "https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png" alt = "hamburger menu"/>
        <img  className = " mx-2 h-7 object-contain " src = "https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt ="youtube"/>
        </div>

        <div className='col-span-10 px-10 flex'>
            <input  className = "w-1/2 border border-gray-400 rounded-l-full px-5 py-2 " type = "text" placeholder='Search'/>
            <button className="border border-gray-400 p-2 rounded-r-full  bg-gray-100">
           <MagnifyingGlassIcon className="h-6 w-5" />
</button>
        </div>

        <div>
          
           
  <img className = " h-9" src="https://cdn-icons-png.flaticon.com/512/847/847969.png" alt="User Avatar"/>
 
        </div>
    </div>


 

  )
}

export default Header
