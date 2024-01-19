'use client'

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { PiStorefrontDuotone } from "react-icons/pi";
import SignUp from "./SignUp";
import Image from 'next/image'
import { CgLogOut } from "react-icons/cg";




const Navbar = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  // Add event listener to close the sidebar when clicking outside of it
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        closeSidebar();
      }
    };

    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isSidebarOpen]);


  const menuItems = [
    // {
    //   href: '/',
    //   title: 'Homepage',
    // },
    {
      href: '/about',
      title: 'About',
    },

  ];

  const { status, data: session } = useSession();

  return (
    <section className="shadow-xl border-2 border-slate-800 sticky top-0 z-10 flex w-full">



      <div className="navbar bg-base-100">
        <div className="flex-1">
          <div className="cursor-pointer flex items-center">
            <PiStorefrontDuotone />
            <Link href="/">OAUmart</Link>
          </div>
        </div>

        {status === 'authenticated' && <Image alt='img' className="rounded-full" width={30} height={30} src={session?.user.image} />}
        {status === 'authenticated' && <p className="text-[20px] font-light mx-2">{session?.user.name}</p>}
        <div className="flex">
          <Link className="btn btn-active btn-accent " href='/sell' >
            Sell
          </Link>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn m-1">Quick Action</div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link href="/bedspace" className="flex"> <span>😴</span>  <span>BedSpace</span> </Link></li>
              <li><Link href='/about' >&#8505; About us</Link></li>
              <li><Link href="mailto:oaumart@gmail.com">&#9993; Contact</Link></li>
              <li>
                {status === 'authenticated' && <button className="bg-red-500 hover:text-black " onClick={() => signOut()}> <CgLogOut width={25} /> SignOut</button>}

              </li>
            </ul>
          </div>
        </div>
      </div>




    </section>
  );
};

export default Navbar;
