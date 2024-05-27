import React from 'react'
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center gap-2 shadow-lg p-2 rounded-md'>
       
        <div><AccountCircleIcon /></div>
        <span className='font-bold'>{name}</span>
        <span>{message}</span>
    </div>
  )
}

export default ChatMessage