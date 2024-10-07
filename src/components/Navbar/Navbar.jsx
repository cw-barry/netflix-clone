"use client";

import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useAuth } from "../../context/AuthContext";

export default function Navbar() {
  const { currentUser, logout } = useAuth();
  return (
    <nav className=" text-white fixed top-0 z-10 w-full px-4 md:px-16 py-6 flex justify-between items-center">
      <Link href="/" className="relative flex h-4 lg:h-7 w-32">
        <Image src="/images/logo.png" alt="logo" fill />
      </Link>

      <Menu as="div" className="relative">
        <MenuButton className="rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white">
          <div className="relative w-8 h-8">
            <Image
              src={currentUser? currentUser.photoURL :"/images/default-slate.png"}
              alt="current user"
              fill
              className="rounded-full"
            />
          </div>
        </MenuButton>
        <Transition
          enter="transition ease-out duration-75"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <MenuItems
            anchor="bottom end"
            className="absolute right-0 z-10 mt-1 w-48 rounded-md bg-white py-1 shadow-md ring-1 ring-gray-200"
          >
      
      {!currentUser&&(
              <>
              <MenuItem>
              <Link href="/login" className="nav-link">Login</Link>
              </MenuItem>
              <MenuItem>
              <Link href="/register" className="nav-link">Register</Link>
              </MenuItem>
            </>

      )}
      {currentUser&&(
              <>
              <MenuItem>
              <Link href="/profile" className="nav-link">Profile</Link>
              </MenuItem>
              <MenuItem>
              <span href="/r" className="nav-link" onClick={()=> logout()}>Logout</span>
              </MenuItem>
            </>

      )}

          </MenuItems>
        </Transition>
      </Menu>
    </nav>
  );
}
