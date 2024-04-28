import React from 'react'
import Button from './Button'

const list=["All","Gaming","Songs","Live","News","Cooking","Soccer","Computer Programming","Cars","MoterSport","Algebra"]

const ButtonList = () => {
  return (
    
    <div className='flex py-2'>
      {
        list.map((name,index) =>(
          <Button key={index} name={name}/>
        ))
      }
    </div>
  )
}

export default ButtonList