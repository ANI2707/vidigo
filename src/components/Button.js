import React from 'react'
import { addSearchVideos } from '../utils/searchSlice';
import { useDispatch } from 'react-redux';

const Button = (props) => {
  const dispatch = useDispatch();

  const handleTabSearch = async ()=>{
    const data= await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${props.name}&type=video&key=AIzaSyDTZbv-EYcJgkOmsnMbghMorfgo7FoTHhg
    `)

    const json=await data.json();
    dispatch(addSearchVideos(json?.items)) 
  }
  
  return (
    <div className=''>
        <button onClick={handleTabSearch} className=' p-3 m-2 bg-gray-200 rounded-lg px-5 py-1 hover:bg-gray-300'>{props.name}</button>
    </div>
  )
};

export default Button