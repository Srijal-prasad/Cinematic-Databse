import React from 'react'
import loadernew from "/loadernew.gif";

function Loading() {
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-black'>
      <img className='h-[50%] object-cover' src={loadernew} alt=''></img>
    </div>
  )
}

export default Loading
