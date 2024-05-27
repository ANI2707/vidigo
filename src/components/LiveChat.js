import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generate, messageGenerater } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  const [LiveMessage,setLiveMessage]=useState("")
  useEffect(() => {
    const i = setInterval(() => {
      //API Polling
      // console.log("API Polling")

      dispatch(
        addMessage({
          name: generate(),
          message: messageGenerater(),
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);

  const handleSubmitMesage = () =>{
    dispatch(addMessage({
      name:"User",
      message:LiveMessage,
    }));
    setLiveMessage("")
  }

  return (
    <>
      <div className=" h-[612px] ml-2 p-2  border border-black rounded-lg bg-slate-100 overflow-y-scroll flex flex-col-reverse">
        <div>
          {/* Disclaimer : Don't use index as keys */}
          {chatMessages.map((chatMessage, index) => (
            <ChatMessage
              key={index}
              name={chatMessage.name}
              message={chatMessage.message}
            />
          ))}
        </div>
      </div>
      <div className="ml-2 p-2 w-96 mt-4 flex">
        <input className=" border border-black w-full p-2" type="text" value={LiveMessage} onChange={(e)=>setLiveMessage(e.target.value)}/>
        <button onClick={handleSubmitMesage} className=" py-1 px-2 mx-2 bg-green-300">Submit</button>
      </div>
    </>
  );
};

export default LiveChat;
