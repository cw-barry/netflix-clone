import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function notFound() {
  return (
    <div className='h-screen flex flex-col justify-center items-center gap-5'>

        <div className='relative w-[50%] h-[30%] '>
            <Image src="/images/404-page-not-found.png" alt="" fill/>
        </div>      
        <p className='text-5xl text-red-500'>Nothing Here !</p>
        <Link href="/" className='btn-danger w-[100px] text-center'>Back</Link>
    </div>
  )
}
