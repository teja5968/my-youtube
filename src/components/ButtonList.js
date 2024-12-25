import React from 'react'
import Button from './Button'

const ButtonList = () => {

  const list = ["All","Live","Songs","Cricket","Music","Cooking","Gaming","News","Sports"];
  return (
    <div className='flex'>
     {/* {list.map((li)=>{

      return <Button key = {li} name= {li}/>


     }
    )} */}
    
{

  list.map((li)=><Button key = {li} name = {li}/>)
}


      
      
    </div>
  )
}

export default ButtonList
