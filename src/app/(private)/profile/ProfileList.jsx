"use client"
import { profileImages } from "../../../constants";
import { useAuth } from "../../../context/AuthContext";
import UserCard from './UserCard';

export default function ProfileList() {

  const {currentUser} = useAuth()

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-10">
      {profileImages.map((image, index)=> 
      <UserCard key={index}
       image={index==0&&currentUser? currentUser.photoURL : image}
       name={index==0&&currentUser? currentUser.displayName : `Guest-${index+1}`}
      />)}
    </div>
  )
}
