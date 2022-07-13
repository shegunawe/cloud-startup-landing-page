import React, { useState } from "react";
import Link from "next/link"

import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className=" w-screen h-[80px] bg-zinc-200 fixed drop-shadow-lg z-10">
      <div className="px-2 flex justify-around items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">BRAND.</h1>
        </div>
        <div>
          <ul className="hidden md:flex ">
            <Link href="/#hero">
              <li>Home</li>
            </Link>
            <Link href="/#about">
              <li>About</li>
            </Link>
            <Link href="/#support">
              <li>Support</li>
            </Link>
            <Link href="/#platforms">
              <li>Platforms</li>
            </Link>
            <Link href="/#pricing">
              <li>Pricing</li>
            </Link>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <button className="border-none bg-transparent text-black mr-4">
            Sign In
          </button>
          <button className="px-8 py-3">Sign Up</button>
        </div>
        <div
          className="md:hidden hover:cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:animate-spin"
          onClick={handleClick}
        >
          {nav ? <XIcon className=" w-5" /> : <MenuIcon className=" w-5" />}
        </div>
      </div>

      {nav && (
        <ul className="absolute bg-zinc-200 w-full px-8 md:hidden h-screen">
          <Link href="/#hero">
            <li className="border-b-2 border-zinc-300 w-full">Home</li>
          </Link>
          <Link href="/#about">
            <li className="border-b-2 border-zinc-300 w-full">About</li>
          </Link>
          <Link href="/#support">
            <li className="border-b-2 border-zinc-300 w-full">Support</li>
          </Link>
          <Link href="/#platforms" onClick={handleClick}>
            <li className="border-b-2 border-zinc-300 w-full">Platforms</li>
          </Link>
          <Link href="/#pricing">
            <li className="border-b-2 border-zinc-300 w-full">Pricing</li>
          </Link>
          <div className="mt-3 md:hidden px-4 flex flex-col">
            <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">
              Sign In
            </button>
            <button className="px-8 py-3">Sign Up</button>
          </div>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
