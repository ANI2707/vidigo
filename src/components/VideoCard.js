import React from 'react'
import { convertViews, timeAgo } from '../utils/constants';

const VideoCard = ({info}) => {
    console.log(info);
    const {snippet,statistics}=info;
    const {channelTitle,title,thumbnails,publishedAt}=snippet;

    const timeElapsed=timeAgo(publishedAt);
    const convertedViews=convertViews(statistics?.viewCount);
    

     
      
      

  return (
    <div className='px-2 py-4 m-2 w-80 shadow-lg rounded-lg'>
        <img className='rounded-lg ' src={thumbnails.medium.url} alt="thumbnail" />
        <div className='px-2'>
        <div className='font-bold'>{title}</div>
        <div className='font-semibold text-gray-600'>{channelTitle}</div>
        <div className=''>
            {convertedViews} views
            <span className='mx-2'>• {timeElapsed}</span>
        </div>
        </div>
        
    </div>
  )
}

export default VideoCard