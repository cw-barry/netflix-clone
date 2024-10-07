import React from 'react'

export default function AuthLayout({children}) {
  return (
    <main className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
    <div className="bg-black w-full bg-opacity-50 flex flex-col items-center gap-3 text-center h-full">
    <div className="bg-black bg-opacity-80 p-16 lg:w-2/5 lg:max-w-md rounded-md w-full mt-28">
     {children}
    </div>
    </div>
  </main>
  )
}
