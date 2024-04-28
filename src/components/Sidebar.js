import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const isMenuOpen=useSelector((state=>state.app.isMenuOpen))
  return isMenuOpen &&  (
    
    <div className='h-screen  w-64 p-5 shadow-lg'>
      <ul className=' '>
        <li><Link to={"/"}>Home</Link></li>
        <li>Shorts</li>
        <li>Video</li>
        <li>Live</li>
        <div className='border-b border-black py-2'></div>
      </ul>
      <h1 className='font-bold pt-5'>Subscription</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
        <div className='border-b border-black py-2'></div>

      </ul>
      <h1 className='font-bold pt-5'>Watch later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
        <div className='border-b border-black py-2'></div>

      </ul>
      {/* <h1 className='font-bold pt-5'>Explore</h1>
      <ul>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Films</li>
        <li>Live</li>
        <li>Gaming</li>
        <li>News</li>
        <li>Sport</li>
        <li>Courses</li>
        <li>Fashion & beauty</li>


      </ul> */}
    </div>
  )
}

export default Sidebar