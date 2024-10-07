import React from 'react'
import {getMovies} from '../../../TMD'
import HeroSection from './HeroSection';
import MovieSection from '../../../components/MovieSection';

export const metadata = {
title:'Movies'
}

export default async function MoviesPage() {
  const movies = await getMovies("now_playing")


  return (
    <section>
      <HeroSection movie={movies[0]}/>
      <div className="px-4 md:px-2 mt-4 pb-20">

      <MovieSection title="NOW PLAYING" type="now_playing"/>
      <MovieSection title="POPULAR" type="popular"/>
      <MovieSection title="TOP RATED" type="top_rated"/>
      <MovieSection title="UPCOMING" type="upcoming"/>
      </div>
    </section>
  )
}
