import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addSearchVideos } from "../utils/searchSlice";

const VideoContainer = () => {
  const searchVideos=useSelector((state)=>state.search.searchVideos);
  const dispatch=useDispatch();

  

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();

    // // console.log(json);
    // setVideos(json.items);
    dispatch(addSearchVideos(json.items));


  };
  useEffect(() => {
    getVideos();
  }, []);



  return (
      
      <div className="flex flex-wrap">
        {Array.isArray(searchVideos) && searchVideos.map((video) => (
          <Link key={video.id} to={`/watch?v=${video.id.videoId}`}>
            
            <VideoCard  info={video} />
          </Link>
        ))}
      </div>
    )
  
};

export default VideoContainer;
