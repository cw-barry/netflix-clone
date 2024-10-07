"use client"
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

export default function Authprovider({children}) {
    const router = useRouter()

    useEffect(()=>{
        const user = JSON.parse(sessionStorage.getItem('user'))
        if(!user)   
            router.replace('/login')

    }, [])
  return (
    <>
      {children}
    </>
  )
}
