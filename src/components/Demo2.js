import React, { useRef, useState } from 'react'

const Demo2 = () => {
    //state variable 
    const [y,setY]=useState(0);
    //local variable 
    let x=10;
    //useRef variable
    const z=useRef(0);

    console.log("Rendering...")


  return (
    <div className='m-4 p-2 bg-slate-100 border border-black w-96 h-96'>
        <div>
            <button className="bg-green-400 p-2 m-4" onClick={()=>{
                x++;
                console.log("x=",x);
                }}>Increase x</button>
            <span className='font-bold'>Let = {x}</span>
        </div>
        <div>
            <button className="bg-green-400 p-2 m-4" onClick={()=>{
                setY(y+1);
                console.log("y=",y);
                }}>Increase y</button>
            <span className='font-bold'>state = {y}</span>
        </div>
        <div>
            <button className="bg-green-400 p-2 m-4" onClick={()=>{
                z.current=z.current+1;
                console.log("z=",z.current);
                }}>Increase z</button>
            <span className='font-bold'>useRef = {z.current}</span>
        </div>
    </div>
  )
}

export default Demo2;