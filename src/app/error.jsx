"use client"

import { useEffect } from "react"

export default function error({error}) {

    useEffect(()=>{
        console.log(error)
    }, [error])
  return (
    <div className="mt-64 text-center">
        <h1 className="text-red-main text-2xl"> Something went wrong !</h1>
      
    </div>
  )
}
