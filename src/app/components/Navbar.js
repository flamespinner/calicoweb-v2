'use client'
import Link from 'next/link';
import "../globals.css";
import Image from 'next/image';
import React, { useState } from 'react';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
        <nav className="fixed w-full h-24 bg-transparent">
          <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
            <Link href="/">
              <Image
                className="relative"
                src="/cclogomark.png"
                alt="Calico Logo"
                width={85}
                height={85}
                priority
              />
            </Link>
            <div>
              <ul className="hidden sm:flex">
                <Link href="/">
                  <li className='ml-10 uppercase hover:border-b text-xl hover:text-gray-500'>Home</li>
                </Link>
                <Link href="/aboutus">
                  <li className='ml-10 uppercase hover:border-b text-xl hover:text-gray-500'>About Us</li>
                </Link>
                <Link href="https://rules.calicocountyrp.com/">
                  <li className='ml-10 uppercase hover:border-b text-xl hover:text-gray-500'>Rules</li>
                </Link>
                <Link href="/keybinds">
                  <li className='ml-10 uppercase hover:border-b text-xl hover:text-gray-500'>Keybinds</li>
                </Link>
{/*                 <Link href="https://core.calicocountyrp.com">
                  <li className='ml-10 uppercase hover:border-b text-xl'>Core</li>
                </Link> */}
              </ul>

              {/*mobile button*/}
              <div onClick={handleNav} className='block sm:hidden z-10'>
                {nav ? (
                  <AiOutlineClose size={30} />
                ) : (
                  <AiOutlineMenu size={30} />
                )}
              </div>
              {/*mobile menu*/}
              <div
                className={
                  nav
                    ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
                    : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
                }
              >
                <ul>
                  <li onClick={handleNav} className='uppercase p-4 hover:border-b text-4xl hover:text-gray-500'>
                    <Link href="/"> Home </Link>
                  </li>
                  <li onClick={handleNav} className='uppercase p-4 hover:border-b text-4xl hover:text-gray-500'>
                    <Link href="/aboutus">About Us</Link>
                  </li>
                  <li onClick={handleNav} className='uppercase p-4 hover:border-b text-4xl hover:text-gray-500'>
                    <Link href="https://rules.calicocountyrp.com/">Rules</Link>
                  </li>
                  <li onClick={handleNav} className='uppercase p-4 hover:border-b text-4xl hover:text-gray-500'>
                    <Link href="/keybinds">Keybinds</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
    </div>
  )
}
