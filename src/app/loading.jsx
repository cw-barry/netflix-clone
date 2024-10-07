import React from 'react'
import { BounceLoader } from 'react-spinners'

export default function loading() {
  return (
    <div className='h-screen flex flex-col justify-center items-center gap-5'>
      <BounceLoader size={50} color="red"/>
      <div className="text-red-50 text-center text-lg"> Loading ...</div>
    </div>
  )
}
