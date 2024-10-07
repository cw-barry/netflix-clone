import {user} from './context/AuthContext'

export function middleware(req){
  
  console.log(user)
}

export const config = {

    // The following matcher runs middleware on all routes
    // except static assets.
    matcher: [ '/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
  };