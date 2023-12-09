'use client'


import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { PiStorefrontDuotone } from "react-icons/pi";
import SignUp from "./SignUp";




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

  return (
    <section className="shadow-xl border-2 border-slate-800 sticky top-0 z-10 flex">
      <div className="container mx-auto py-2 text-[24px] flex justify-between items-center rounded-md">


        <div className="navbar bg-base-100">
          <div className="flex-1">
            <div className="cursor-pointer flex items-center">
              <PiStorefrontDuotone />
              <Link href="/">OAUmart</Link>
            </div>
          </div>


          <div className="flex">
            <Link className="btn btn-active btn-accent " href='/sell' target="_blank">
              Sell
            </Link>
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn m-1">&#9759;</div>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><a><Link href='/about' >&#8505; About us</Link></a></li>
                <li><a><Link href="mailto:bellobambo21@email.com">&#9993; Contact</Link></a></li>

              </ul>
            </div>
          </div>
        </div>
      </div>




      {/* Sidebar */}
      {isSidebarOpen && (
        <div
          ref={sidebarRef}
          className={`bg-gray-200 w-64 h-screen max-h-[150px] fixed top-0 right-0 transform transition-transform duration-300 ease-in-out z-50 ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >

          <div className=" p-3 ">
            <div className="flex items-center mb-2">
              <PiStorefrontDuotone />
              <h2 className="font-bold text-lg">OAU Market²</h2>
            </div>

            <Link href="/contact" className="hover:scale-105 mb-2">About</Link>
            <br />
            <Link href="mailto:bambobello5@gmail.com" className="hover:scale-[105px]">Contact</Link>

          </div>

        </div>
      )}
    </section>
  );
};

export default Navbar;
