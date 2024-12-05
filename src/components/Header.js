import React from 'react'

const Header = () => {
  return (
    <div className='grid grid-flow-col '>

        <div className='flex'>

        <img className ='h-9 object-contain' src = "https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/What%20is%20a%20Hamburger%20Button.png?width=225&name=What%20is%20a%20Hamburger%20Button.png" alt = "menu"/>
        <img  className = "w-30 h-10 object-contain" src = "https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-1200-80.jpg" alt ="youtube"/>
        </div>

        <div>
            <input type = "text" placeholder='Search'/>
            <button>Search</button>
        </div>

        <div>
            <img className = " h-8 " src = "https://cdn-icons-png.flaticon.com/512/1144/1144760.png" alt ="user-icon"/>
        </div>
    </div>
  )
}

export default Header
