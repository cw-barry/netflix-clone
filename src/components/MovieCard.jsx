import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const IMG_API = 'https://image.tmdb.org/t/p/w500';
const defaultImage = 'https://ih1.redbubble.net/image.1861329650.2941/flat,750x,075,f-pad,750x1000,f8f8f8.jpg'
export default function MovieCard({poster_path, id, title, vote_average}) {


  return (
    
    <Link href={`/movies/${id}`} className='w-40 h-[240px] relative cursor-pointer'>
        <Image
         src={poster_path? IMG_API+poster_path : defaultImage}
         width={160}
         height={240}
         alt="movie-card"
         className='brightness-[80%] hover:brightness-100 transition border-2 border-transparent hover:border-white'
        title={title}
        />
        <span className='absolute top-1 right-1 text-white font-semibold z-10 drop-shadow-sm'> {Number(vote_average).toFixed(1)}</span>
    </Link>
  )
}
