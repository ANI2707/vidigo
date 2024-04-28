import React from 'react'

const Button = (props) => {
  return (
    <div className=''>
        <button className=' p-3 m-2 bg-gray-200 rounded-lg px-5 py-1 hover:bg-gray-300'>{props.name}</button>
    </div>
  )
};

export default Button