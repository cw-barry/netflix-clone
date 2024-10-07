import React from 'react'
import VideoSection from '../../../components/VideSection'
import {getVideoKey} from '../../../TMD'
import Link from 'next/link'
import { FaPlay } from "react-icons/fa";

export default async function HeroSection({movie}) {
    const videkey = await getVideoKey(movie?.id)
  return (
    <div className='h-[60vh] w-full relative md:h-[80vh]'>
        <VideoSection videoKey={videkey}/>
      <div className="absolute ml-4 md:ml-15 top-[50%]">
        <h1 className='text-white text-xl md:text-5xl h-full max-w-xl lg:text-6xl font-bold drop-shadow-xl'>{movie?.title}</h1>
        <p className="text-white text-[8px] md:text-lg md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-lg">
            {movie?.overview}
        </p>
        <Link href={`/movies/${movie?.id}`} className='btn-light flex w-fit mt-10 items-center justify-center'>
        <FaPlay className='w-4 mdLw-7 text-black mr-1'/>
        <span>Play</span>
        </Link>
      
      </div>
    </div>
  )
}
